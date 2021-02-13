const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end("Hello from the sample app");
});

app.listen(3000, () => {
    console.log("Listening on port 3000...")
});