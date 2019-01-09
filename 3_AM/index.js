const express = require("express");
const app = express();
const path = require('path')

app.use(express.static('public'))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/View/index.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + '/View/about.html'));
})

app.get("/foods", (req,res) => {
  res.sendFile(path.join(__dirname + '/View/food.html'));
})

app.get("/sites", (req, res) => {
  res.sendFile(path.join(__dirname + '/View/sites.html'));
})

app.listen(3000);
console.log("Running at port 3000");
