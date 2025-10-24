import {load} from 'cheerio'

const response = await fetch("https://en.wikipedia.org/wiki/node.js");
const data = await response.text();
const $ = load(data);
const summary = $('#mw-content-text > div > table + p').text();

console.log("Wikipedia page data: ", summary);