// const db = require('../db')
import { tokenTg } from "./config.js";
import { pool } from '../db.js';


export class telegramController {
    async sendMessage(req, res) {
        try {
            for(let i = 0; i<req.body.length; i++) {
                let text = req.body[i].message;
                let chat_id = (await pool.query(`SELECT id_chat_tg FROM chats_tg WHERE username='${req.body[i].username}'`)).rows[0].id_chat_tg;
                await fetch(`https://api.telegram.org/bot` + tokenTg + `/sendmessage?chat_id=` + chat_id + '&text=' + text)
            } 
        } catch(err) {
            console.log(err)
        }
        res.json('Ok')
    }
    // async getChatId(req, res) {
    //     const { username } = req.body.params;
    //     let response = null;
    //     try {
    //         response = (await pool.query(`SELECT id_chat_tg FROM chats WHERE username='${username}'`)).rows[0].id_chat_tg;
    //     } catch(err) {
    //         console.log(err)
    //     }
    //     res.json(response)
            // try {
            //     response = await fetch(`https://api.telegram.org/bot`+token+`/sendmessage?chat_id=`+chat_id+'&text='+text)
            // } catch(err) {
            //     response = err;
            // }
    // }
}