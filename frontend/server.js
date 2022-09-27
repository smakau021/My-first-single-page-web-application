const express = require("express");
const path = require("path");

const app = express();

"Here I am basically saying any route / path at all, we gonna gonna go back to the root and send back our index html"
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.get("/*", (req, res) =>
    res.sendFile(path.resolve("/home/sphe/SecondSementer/My-first-single-page-web-application/frontend", "index.html")));
"No matter what path I send to the web server to route to any route , they all gonna go back to this index.html"
    

app.listen(process.emp || 5050, () => console.log("Server running ......")) 
