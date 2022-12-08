import express from "express";
import createRandom from "./createRandom.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const str = createRandom();

app.listen("8080", () => {
  console.log("Server listening on port 8080");
});
