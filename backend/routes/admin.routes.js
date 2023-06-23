const Router = require('express')
const { json } = require('express/lib/response')
export const AdminRouter = new Router()

const adminController = require('../controller/admin.controller')

// AdminRouter.get('/drop_table', adminController.drop_table); // отчистить таблицу
