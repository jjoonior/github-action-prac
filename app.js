const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('ci/cd test!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
