const express = require("express");
const router = express.Router();

const {
    showUsers,
    addUser
} = require('D:\\wesee\\node projects\\learning_projects\\todo\\routehandlers\\routehandlers.js');


router.route('/bro').get(showUsers).post(addUser);

module.exports = router;