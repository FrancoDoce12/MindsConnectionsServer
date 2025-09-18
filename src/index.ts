import express from "express";
import dotenv from "dotenv";
import mongoDb from "mongodb"

const MongoClient = mongoDb.MongoClient;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



