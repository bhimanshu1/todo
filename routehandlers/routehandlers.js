
const users = {
    "user_1": "Himanshu",
    "user_2": "Aniketh",
    "user_3": "Eshwar"
}

let user = ["fuck", "suck"];

function showUsers(req, res){
    res.json(user);
}

function addUser(req, res){
    let data = req.body;
    console.log(data)
    for (const [key, value] of Object.entries(data)) {
        user.push(value);
    }
    res.send(user);
}

exports.showUsers = showUsers;
exports.addUser = addUser;