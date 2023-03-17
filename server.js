const express = require("express");
const ejs = require("ejs");
const app = express();
const https = require("https");
const { response } = require("express");
app.set("view engine", "ejs");
app.use(express.static("public"));
const url = "https://api.adviceslip.com/advice"
var adviceData = {};

app.get("/", function(req, res){
    res.render("home.ejs", {
        adviceId: 01,
        advice: "Press the button below to get an advice!"
    });
});
app.get("/advice", function(req, res){
    https.get(url, function(response){
        response.on("data", function(data){
            adviceData = JSON.parse(data);
            // console.log(adviceData.slip.id);
            // console.log(adviceData.slip.advice);
            res.render("home.ejs", {
                adviceId: adviceData.slip.id,
                advice: adviceData.slip.advice
            });
        });
    });
});

app.listen(3000, function(){
    console.log("Server has started at port 3000");
});