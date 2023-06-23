// const db = require('../db')
import { tokenVk } from "./config.js";
import { pool } from '../db.js';
import axios from "axios";
import urlencode from "urlencode";

export class vkController {
    async sendMessage(req, res) {
        // try {
        //     for(let i = 0; i<req.body.length; i++) {
        //         let text = `Ваша поездка началась со станции ${req.body[i].start_station} в ${req.body[i].depart_time} час. Запланированное время прибытия на станцию ${req.body[i].arrival_time}. Во время поездки Вам доступны следующие услуги:`;
        //         let chat_id = (await pool.query(`SELECT id_chat_tg FROM chats WHERE username='${req.body[i].username}'`)).rows[0].id_chat_tg;
        //         await fetch(`https://api.telegram.org/bot` + tokenVk + `/sendmessage?chat_id=` + chat_id + '&text=' + text)
        //     } 
        // } catch(err) {
        //     console.log(err)
        // }
        const { user_id, message } = req.body
        let response = axios.post(`https://api.vk.com/method/messages.send?user_id=${user_id}&random_id=0&message=${message}&v=5.131&access_token=${tokenVk}`)
            .then(res => {
                console.log(res)
                return res
            })

        console.log(response)
        res.json('Ok')
    }
    async getUsers(req, res) {
        res.json(await pool.query('SELECT * FROM chats_vk'))
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