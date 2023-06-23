import express from 'express';
import { Telegraf } from 'telegraf';
import { tokenTg } from './telegram/config.js';
import { tokenVk } from './vk/config.js';
import cors from 'cors';
import { telegramRouter } from './telegram/routes.js';
import { vkRouter } from './vk/routes.js'
import { pool } from './db.js';
import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';

// const AdminRouter = require('./routes/admin.routes')

const PORT = process.env.PORT || 8080
const app = express() // создание приложения, которое управляет сервером

app.use(cors()); //
app.options('*', cors()); // настройка безопасности и подключение работы с файлами json
app.use(express.json()); //

const botTelegram = new Telegraf(tokenTg) // подключение бота телеграм
const botVK = new VK({
    token: tokenVk
}) // подключение бота в вк
const botVKHear = new HearManager() // даёт возможность боту вк получать сообщения

botVK.updates.on('message_new', botVKHear.middleware); 
botVKHear.hear(/привет/i, msg => {
    async function addToDb() { // создание асинхронной функции
        let id_user = msg.senderId
        try {
            const checkExist = await pool.query(`SELECT id_user FROM chats_vk WHERE id_user=${id_user}`); // поиск в базе данных id пользователя ВК
            if(checkExist.rows.length === 0) { // если его нет, то
               await pool.query(`INSERT INTO chats_vk (id_user) values($1) RETURNING*`, [id_user]); // добавить в базу данных
            }
        } catch(err) {
            console.log(err);
        }
    }
    addToDb() // запуск функции
    msg.send('Здравствуйте!')
    msg.send('Приступаю к работе...')
}) // обработка сообщения "привет" 

botVK.updates.start().catch(console.error); // запуск бота, выводится ошибка, если она произошла
console.log('Бот VK запущен.') // вывод в консоль сообщения о запуске

botTelegram.start(ctx => { // тоже самое, но с тг ботом
    async function addToDb() {
        let id_user = ctx.update.message.chat.id;
        let username = ctx.update.message.chat.username;
        let first_name = ctx.update.message.chat.first_name;
        let type_chat = ctx.update.message.chat.type;
        
        try {
            const checkExist = await pool.query(`SELECT id_chat_tg FROM chats_tg WHERE id_chat_tg=${id_user}`);
            if(checkExist.rows.length === 0) {
                const addedChat = await pool.query(`INSERT INTO chats_tg (id_chat_tg, username, first_name, type_chat) values($1, $2, $3, $4) RETURNING*`, [id_user, username, first_name, type_chat]);
                console.log((await pool.query('SELECT * FROM chats_tg')).rows)
            }
        } catch(err) {
            console.log(err);
        }
    }
    addToDb()
    ctx.reply('Здравствуйте! Приступаю к работе...')
})
console.log('Бот TG запущен.') // вывод в консоль сообщения о запуске

botTelegram.on('text', ctx => {
    console.log(ctx.update.message.chat)
    ctx.reply('just text')
})
botTelegram.launch() // запуск бота в телеграме

// app.use('/AR', AdminRouter);
app.use('/TR', telegramRouter) // создание пути для запроса http:/localhost:8080/TR
app.use('/VR', vkRouter) // создание пути для запроса http:/localhost:8080/VR

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`)) // прослушка приложением порта 8080