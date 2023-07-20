// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import blogsRouter from "./routes/blogs.route.js";
import foodsRouter from "./routes/foods.route.js";
import moviesRouter from "./routes/movies.route.js";
import blusersRouter from "./routes/users.route.js";
import fdusersRouter from "./routes/users.route copy.js";
import mvusersRouter from "./routes/users.route copy 2.js";
import cors from "cors";

dotenv.config()
const app = express();

const PORT = process.env.PORT;

// Connection
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);
await client.connect(); // top level await 
console.log("Mongo is connected !!!");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get("/", function (request, response) {
    response.send(`Hello World !!!, Welcome to my application`);
});

app.use("/blogs", blogsRouter)
app.use("/foods", foodsRouter)
app.use("/movies", moviesRouter)
app.use("/bl_users", blusersRouter)
app.use("/mv_users", mvusersRouter)
app.use("/fd_users", fdusersRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client }