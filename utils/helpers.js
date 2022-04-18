// require fs
const fs = require('fs');
// require path
const path = require('path');

const createNewEntry = function (body, dataArray, fileName) {
    // push body (newEntry) to array (existing entries)
    const newEntry = body;
    dataArray.push(newEntry);
    // write to correct json file based on name passed as fileName
    fs.writeFileSync(
        path.join(__dirname, `../data/${fileName}.json`),
        // JSON.stringify incoming json data to string
        JSON.stringify({ cats: dataArray }, null, 2)
    );
    // return newEntry
    return newEntry;
};

module.exports = { createNewEntry };