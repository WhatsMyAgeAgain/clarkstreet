const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const port = 8080;

/*
 * Standard routing and file hosting
 */

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/web/index.html"));
});

app.get("/index.css", function (req, res) {
    res.sendFile(path.join(__dirname + "/web/index.css"));
});

app.get("/index.js", function (req, res) {
    res.sendFile(path.join(__dirname + "/web/index.js"));
});

app.get("/resources/categories.json", function (req, res) {
    res.sendFile(path.join(__dirname + "/resources/categories.json"));
});

app.get("/resources/questions.json", function (req, res) {
    res.sendFile(path.join(__dirname + "/resources/questions.json"));
});

app.get("/google63001e0b6d2bf67b.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/google63001e0b6d2bf67b.html"));
});

app.get("/sitemap.xml", function (req, res) {
    res.sendFile(path.join(__dirname + "/sitemap.xml"));
});

app.get("/favicon.ico", function (req, res) {
    res.sendFile(path.join(__dirname + "/favicon.ico"));
});

/* --------------------------------------------------------------- */

// return 404 status for invalid pages
app.get('*', function (req, res) {
    res.sendStatus(404);
});

app.use("/", router);
app.listen(port, () => console.log(`App listening on port ${port}!`));