const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const crawler = require('./modules/crawler');

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

if(process.env.SERVER_MODE == 'live') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'))
}

app.use('/', (req, res) => {
    res.send('Hello World');
    crawler.startCrawling((result) => {
        console.log(result);
    });
});

app.listen(port, () => {
    console.log(`express server is running at http://localhost:${port}/`);
});