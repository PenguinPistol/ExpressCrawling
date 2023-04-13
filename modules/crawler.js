const request = require('request');
const cheerio = require('cheerio');



module.exports = {
    startCrawling: (callback) => {
        const result = [];

        request('https://entertain.naver.com/home', (err, res, body) => {
            const $ = cheerio.load(body)
            const bodyList = $("#left_cont > div.home_hdline_grid > div.hdline_type_thumb_sub > ul > li > a").map((i, element) => {
                const image = String($(element).attr('href'));
                const scraping = {
                    'image': `${image}`
                }
                result.push(scraping);
            });
            callback(result);
        });
    }
    //#left_cont > div.home_hdline_grid > div.hdline_type_thumb_sub > ul > li:nth-child(1)
}
