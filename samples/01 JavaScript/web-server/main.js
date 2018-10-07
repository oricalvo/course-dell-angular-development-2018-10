const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/user", function(req, res) {
});

app.post("/api/user", function(req, res) {
    const user = req.body;
});

app.listen(3000, function() {
    console.log("Server is running");
});
