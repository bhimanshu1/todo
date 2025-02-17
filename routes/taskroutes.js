const express = require("express");
const router = express.Router();
const {
    getask,
    deletetask,
    updatetask,
    createtask
} = require("D:\\wesee\\node projects\\learning_projects\\todo\\routehandlers\\taskhandlers.js")

router.route('/').get(getask).post(createtask);
router.route('/:id').patch(updatetask).delete(deletetask);

exports.router = router;   