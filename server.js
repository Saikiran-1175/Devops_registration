const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Registration endpoint
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    console.log("New Registration:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    res.send("Registration Successful!");
});

// Run server on localhost:3000
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
