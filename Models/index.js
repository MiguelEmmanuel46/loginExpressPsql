//importing modules
const { Sequelize, DataTypes } = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is sigiaepdb
const sequelize = new Sequelize(`postgres://usersigiaep:aeepsigiaep2013010091W666@192.168.1.208:5432/sigiaepdb`, { dialect: "postgres" })

//checking if connection is done
sequelize.authenticate().then(() => {
   // console.log(`Database connected to `)
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('./userModel')(sequelize, DataTypes)

//exporting the module
module.exports = db