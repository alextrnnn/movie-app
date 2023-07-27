import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config({path: 'secrets.env'})

//data access object
const MongoClient = mongodb.MongoClient
const mongo_username = process.env['mongo_username']
console.log(mongo_username)
const mongo_password = process.env['mongo_password']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.mhsnlre.mongodb.net/?retryWrites=true&w=majority`

const port = 8000

// Establish connection to database
MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    //Where we actually connect to DB
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})