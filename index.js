const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const data = require('./data/data.json')


app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from server 300");
});

app.get("/data", (req, res) => {
    res.send(data);
  });



app.listen(port, () => {
  console.log("server is running on port: ", port);
});
