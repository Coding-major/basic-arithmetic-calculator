const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
// app.post("/", function (req, res) {
    
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     var result = num1 + num2;

//     res.send(`the result is ${result}`)
// })

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/index.html")
// })

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.get("/addition", function(req, res) {
    res.sendFile(__dirname + "/addition.html")
})

app.get("/subtraction", function(req, res) {
    res.sendFile(__dirname + "/subtraction.html")
})

app.get("/multiply", function(req, res) {
    res.sendFile(__dirname + "/multiply.html")
})

app.get("/division", function(req, res) {
    res.sendFile(__dirname + "/division.html")
})


app.post("/bmiCalculator", function (req,  res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight / (height*height)

    res.send(`<h1>the BMI result is: ${result}</h2>`)
})

app.post("/addition", function (req,  res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2

    res.send(`<h1>${num1} + ${num2} = ${result}</h1>`)
})

app.post("/subtraction", function (req,  res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 - num2

    res.send(`<h1>${num1} - ${num2} = ${result}</h1>`)
})

app.post("/multiply", function (req,  res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 * num2

    res.send(`<h1>${num1} * ${num2} = ${result}</h1>`)
})

app.post("/division", function (req,  res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 / num2

    res.send(`<h1>${num1} / ${num2} = ${result}</h1>`)
})

port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("server running on port 9000");
})