import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/slaves", (request, response) => {
  const macId = request.body.macId;
  const ipAddr = request.body.ipAddr;
  response.json({ message: "device registered " + macId + " " + ipAddr });
});

app.listen(3000, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("server started");
  }
});
