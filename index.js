import express from "express";
import pg from "pg";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";

configDotenv();

const app = express();
const port = 3000;

const db = new pg.Client({
     user: process.env.DATABASE_USER,
     host: process.env.DATABASE_HOST,
     database: process.env.DATABASE_NAME,
     password: process.env.DATABASE_PASSWORD,
     port: process.env.DATABASE_PORT,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
     res.render("index.ejs");
});

app.listen(port, (req, res) => {
     console.log("Server running on port: " + port);
});
