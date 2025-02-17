const express = require("express");
const app = express();
const {router} = require('.\\routes\\taskroutes.js');

app.use(express.json());

app.use("/api/v1/tasks", router);

const port = 3000;
app.listen(port, (req, res) => {
    console.log("The Server on port: ", port);
})