
const getask = (req, res) =>{
    res.send("<h1>Here are Your Task!</h1>");
}

const createtask = (req, res) => {
    res.send("<h1>You Have Posted a new task</h1>")
}

const updatetask = (req, res) => {
    res.send("<h1>You Have updated a task</h1>")
}

const deletetask = (req, res) => {
    res.send("<h1>You Have deleted a task</h1>")
}

exports.getask = getask
exports.createtask = createtask
exports.updatetask = updatetask
exports.deletetask = deletetask