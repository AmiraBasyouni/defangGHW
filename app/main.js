const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/", (req, res) => {
    res.send('hello world!');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
