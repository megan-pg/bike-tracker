const fs = Require('fs');
const untils = require('untils');

module.exports = {
    readFileAsync = untils.promisify(fs.readFile),
    appendFileAsync = untils.promisify(fs.appendFile),
};