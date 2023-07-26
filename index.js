import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config({path: 'secrets.env'})

//data access object
const MongoClient = mongodb.MongoClient
const mongo_username = process.env['mongo_username']
console.log(mongo_username)
const mongo_password = process.env['mongo_password']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.mhsnlre.mongodb.net/?retryWrites=true&w=majority`

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        writeConcern: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})