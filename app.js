const express = require("express");
const bodyParser = require('body-parser')
const app = express();
console.log("found");
const itemrouters = require(".\\routes\\itemroutes.js");
console.log("Mouse");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get("/", (req, res) => {
    console.log(req);
    res.send("<h1>Good To See You!!!</h1>");
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("<h1>post: Good To See You!!!</h1>");
})

app.use('/api/v1/items', itemrouters);

const port = 3000;
app.listen(port, (req, res) => {
    console.log("Server Listening on Port: ", port);
})  