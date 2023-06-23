import { Router } from 'express'
import { telegramController } from './controller.js'

export const telegramRouter = new Router()
const contoller = new telegramController();

telegramRouter.post('/send_message', contoller.sendMessage); 
// telegramRouter.post('/getChatId', contoller.getChatId)