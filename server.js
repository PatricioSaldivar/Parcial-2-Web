const express = require("express");

let app = express();

let PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Routes

app.get("/", function(req, res) {
    res.send("You are on the homepage");
});

app.post("/post", function(req,res){
    res.send("Welcome " + req.body.user);
});

app.delete("/delete", function(req,res){
    res.json({delete: true});
});

app.put("/put/:id", function(req, res) {
    var chosen = req.params.id;
    return res.send("Task " + chosen + " has been updated");
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});