const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");


var url = 'http://www.timliao.com/bbs/viewthread.php?tid=78410'
request(url, (err, res, body) => {
    if (!err && res.statusCode === 200) {
        console.log('start parse');       
        const $ = cheerio.load(body);
        const result = [];
        const div_a = $(".mt10 a").children();
        console.log(div_a);
    }else{
     console.log('error 404');  
    }
})