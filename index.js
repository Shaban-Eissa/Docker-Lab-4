const express = require("express");

const app = express();
const PORT = 3000



app.get("/", (req, res) => {
 res.send("Node js home page")
});

app.get("/about", (req, res) => {
 res.send("About page")
});

app.get("/contact", (req, res) => {
 res.send("Contact page")
});

app.get("/login", (req, res) => {
 res.send("Node js login page")
});


app.get("/dashboard", (req, res) => {
    res.send("Welcome to node js dashboard")
   });

app.get("/settings", (req, res) => {
    res.send("Settings")
   });
   

app.listen(PORT , ()=> {
    console.log(`App listening Now at http://localhost:${PORT}`)
})
   

