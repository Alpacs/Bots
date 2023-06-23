import { Router } from 'express'
import { vkController } from './controller.js'

export const vkRouter = new Router()
const contoller = new vkController();

vkRouter.post('/send_message', contoller.sendMessage); 
vkRouter.get('/GU', contoller.getUsers)
// telegramRouter.post('/getChatId', contoller.getChatId)