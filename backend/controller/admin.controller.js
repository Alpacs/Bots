// const db = require('../db')

class AdminController {
    
    // async drop_table (req,res) { // отчистить таблицы
    //     await db.query(`TRUNCATE TABLE reviews`);
    //     await db.query(`TRUNCATE TABLE food_points CASCADE`);
    //     await db.query(`TRUNCATE TABLE cities CASCADE`);
    //     await db.query(`TRUNCATE TABLE users CASCADE`);
    //     await db.query(`TRUNCATE TABLE cities CASCADE`);
    //     res.json('OK!');
    // }

}

module.exports = new AdminController()