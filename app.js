var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Chris' Hole", image: "https://i.imgur.com/QakLAVj.jpg"},
    {name: "Wet World", image: "https://i.imgur.com/OFv3gAI.jpg"},
    {name: "Splatter Batter", image: "https://i.imgur.com/7DNBKWj.jpg"}
  ]

  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, "localhost", function(){
  console.log("YelpCamp server is running.")
});
