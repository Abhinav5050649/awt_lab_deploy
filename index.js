const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    try{
        return res.status(200).send("Hello, World");
    } catch (error) {
        return res.status(500).send("Internal Server Error!")
    }
});

app.listen(port, () => {
    console.log(`App listening on PORT: ${port} `)
});