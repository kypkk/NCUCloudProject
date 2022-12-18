import express from "express";
import createRandom from "./createRandom.js";
import bodyParser from "body-parser";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import e from "express";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//db parameters
const db_option = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

//connection
const connection = mysql.createConnection(db_option);

// redirect the shorten url
app.post("/BKD/*", async (req, res) => {
  try {
    connection.query(
      'SELECT * FROM urls where shortenUrl = "' + req.originalUrl + '"',
      (err, rows) => {
        console.log(
          `redirecting the shortenUrl ${rows[0].shortenUrl} to ${rows[0].url}`
        );
        res.send({ URL: rows[0].url });
        console.log("redirect success");
        console.log(
          "---------------------------------------------------------------------------------"
        );
      }
    );
  } catch (e) {
    console.log(e);
  }
});

// get the required shorten url and sqve it into the database
app.post("/shorten", async (req, res) => {
  let { URL } = req.body;
  let rand = createRandom();
  let reurl = "/BKD/" + rand;

  try {
    connection.query(
      'SELECT * FROM urls where url = "' + URL + '"',
      (err, rows) => {
        if (rows[0] == null) {
          console.log(
            "Trying to insert the Url: " +
              URL +
              " with the shorten Url: " +
              reurl +
              " into the database."
          );

          connection.query("insert into urls set?", {
            url: URL,
            shortenUrl: reurl,
          });

          console.log(
            "insert success. the shorten Url of Url: " + URL + " is" + reurl
          );
          console.log(
            "---------------------------------------------------------------------------------"
          );

          res.send({ URL: reurl });
        } else {
          console.log("the Url is already in the database");
          console.log(
            "the shortened url is localhost:3000" + rows[0].shortenUrl
          );
          console.log(
            "---------------------------------------------------------------------------------"
          );

          res.send({ URL: rows[0].shortenUrl });
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});

// get the required shorten url and the key word then save it into the database
app.post("/custom", async (req, res) => {
  let { URL, Keyword } = req.body;
  let reurl = "/BKD/" + Keyword;

  try {
    connection.query(
      'SELECT * FROM urls where shortenUrl = "' + reurl + '"',
      (err, rows) => {
        if (rows[0] == null) {
          console.log(
            "Trying to insert the Url: " +
              URL +
              " with the shorten Url: " +
              reurl +
              " into the database."
          );

          connection.query("insert into urls set?", {
            url: URL,
            shortenUrl: reurl,
          });

          console.log(
            "insert success. the shorten Url of Url: " + URL + " is" + reurl
          );
          console.log(
            "---------------------------------------------------------------------------------"
          );

          res.send({ URL: reurl });
        } else {
          if (rows[0].url == URL && rows[0].shortenUrl == reurl) {
            console.log("the Url is already in the database");
            console.log(
              "the shortened url is localhost:3000" + rows[0].shortenUrl
            );
            console.log(
              "---------------------------------------------------------------------------------"
            );

            res.send({ URL: rows[0].shortenUrl });
          } else {
            console.log("ERR: same keyword with different url");
            res.send({ URL: "", ERR: "這個關鍵字已經被用過了，請換一個關鍵字" });
          }
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server listening on port " + process.env.SERVER_PORT);
});
