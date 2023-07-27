import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

//Initializes the app, lets us define routes/middleware for handling HTTP requests and responses

//Middleware is a set of functions/operations that are executed in the req/response lifecycle of an app.
//Act as bridges between incoming HTTP request and servers response.
//Perform tasks such as modifying request or response objects, handling code, etc.
const app = express();

app.use(cors())


//This middleware is responsible for parsing incoming requests with JSON payloads. 
//It allows the application to handle JSON data in the request body easily.
//When this middleware is used, req.body will be populated with the JSON data of the incoming request.
app.use(express.json())

//ells the application that any requests starting with "/api/v1/reviews" should be handled by the reviews router.
app.use("/api/v1/reviews", reviews)

//backup route
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app