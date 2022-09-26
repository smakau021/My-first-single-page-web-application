const express = require("express");
const path = require("path");

const app = express();

"Here I am basically saying any route / path at all, we gonna gonna go back to the root and send back our index html"

app.get("/*", (req, res) =>
    res.sendFile(path.resolve("frontend", "index.html")));
