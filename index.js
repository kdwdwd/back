import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ data: " yeoooo serve ris running" });
});

app.listen(2000, () => console.log("Yeeeeyyyyy"));
