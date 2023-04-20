import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import crawler from './modules/crawler.js';

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

if(process.env.SERVER_MODE === 'live') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'))
}

app.use('/test', async (req, res) => {
    console.log("crawling..");
    const result = await crawler.startCrawling();
    res.send(result);
});

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`express server is running at http://${process.env.SERVER_HOST}:${port}/`);
});