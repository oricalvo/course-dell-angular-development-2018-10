const express = require("express");
const {getAllUsers, insertUser} = require("./dal");

const app = express();

app.use(express.json());

register(app, "get", "/api/user", async function(req, res) {
    const users = await getAllUsers();
    res.send(users);
});

register(app, "post", "/api/user", async function(req, res) {
    const user = req.body;
    await insertUser(user);
    res.send({ok: true});
});

function register(app, method, url, func) {
    app[method](url, async function(req, res) {
        try {
            await func(req, res);
        }
        catch(err) {
            res.statusMessage = err.message;
            res.status(500).send();
        }
    });
}

app.listen(3000, function() {
    console.log("Server is running");
});
