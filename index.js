const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const data = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(data);
});


app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = data.find(c => c._id === id);
  console.log(selectedChef);
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
