const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const data = require("./data/data.json");
const recipes = require("./data/recipes.json");
const chef = require("./data/chef.json");

const corsOptions ={
  origin:'http://localhost:5173/', 
  credentials:true,
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.get("/", (req, res) => {
  res.send(data);
});


app.get("/recipes", (req, res) => {
  res.send(recipes);
});


app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = data.find((c) => c._id == id);
  res.send(selectedChef);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipes.find((r) => r.id == id);
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`server is running on port:  ${port}`);
});
