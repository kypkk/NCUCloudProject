import express from "express";
import createRandom from "./createRandom.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/shorten", async (req, res) => {
  let { URL } = req.body;
  let rand = createRandom();
  let reurl = "/reurl/" + rand;

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

          res.send({ URL: rows[0].shortenUrl });
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

app.listen("8080", () => {
  console.log("Server listening on port 8080");
});
