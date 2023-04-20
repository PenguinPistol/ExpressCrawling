import cheerio from 'cheerio';
import axios from 'axios';


export default {
    startCrawling: async () => {
        const url = "https://entertain.naver.com/home";
        const results = [];
        const ax = axios.create({
            headers: {
                'Accept': '*/*'
            },
            timeout: 10000
        });

        try {
            const html = await ax.get(url)
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
