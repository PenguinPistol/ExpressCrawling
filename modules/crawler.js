const cheerio = require('cheerio');
const axios = require('axios').create({
    headers: {
        'Accept': '*/*'
    },
    timeout: 10000
});


module.exports = {
    startCrawling: async () => {
        const url = "https://entertain.naver.com/home";
        const results = [];

        try {
            const html = await axios.get(url)
            const $ = cheerio.load(html.data);
            const bodyList = $("#left_cont > div.home_hdline_grid > div.hdline_type_thumb_sub > ul > li > a");
            bodyList.map((i, element) => {
                const image = String($(element).attr('href'));
                const scraping = {
                    'image': `${image}`
                }
                results.push(scraping);
            });
        } catch(err) {
            console.log(err);
        }

        return results;
    }
}
