const url = "https://github.com/topics";
const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

request(url, callBack);
function callBack(err, res, html){
    if(err)
        console.log("Error Occured: ", err);
    else
        extractLink(html);
}

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElem = $(".topic-box>a");
   
}