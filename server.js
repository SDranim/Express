const express = require("express");
const app=express();
const port= 5000;
const moment = require("moment");
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "Home.html"));
});
if (
    moment().day() >= 1 &&
    moment().hours() >= 9 &&
    moment().day() <= 5 &&
    moment().hours() <= 17
) {
   app.use(express.static("Public"));
} else {
  app.get("*", (req, res) => {
    res.status(404);
    res.send(
      "<h1>The web application is only available in working time (Monday to Friday,  from 9h to 17h) </h1>"
    );
  });
}

app.listen(port, () => {
    console.log(`the server is running on port:http://localhost:${port}`);
  });