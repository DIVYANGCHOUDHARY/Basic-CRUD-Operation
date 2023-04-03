const express = require("express");
const app = express(); 
const port = 3004

// configuration
app.set("view engine", "hbs");
app.set("views", "./view")
app.use(express.static(__dirname + "/public"))

// Routing
app.get("/", (req, res) => {
    res.render("index")
    // res.send("Hello it's Divyang Choudhary");
});
app.get("/add", (req, res) => {
    res.render("add")
});
app.get("/search", (req, res) => {
    res.render("search")
});
app.get("/update", (req, res) => {
    res.render("update")
});
app.get("/delete", (req, res) => {
    res.render("delete")
});
app.get("/view", (req, res) => {
    res.render("view")
});

// Create Server
app.listen(port, (err) =>{
    if(err)
        throw err
    else
        console.log("Server is running at port %d:", port);
});