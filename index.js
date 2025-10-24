const response = await fetch("https://en.wikipedia.org/wiki/node.js");
const data = await response.text();
console.log("Wikipedia page data: ", data);