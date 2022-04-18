// require fs
const fs = require('fs');
// require path
const path = require('path');

const addCat = function (body, dataArray, fileName) {
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

const addVolunteer = function (body, dataArray, fileName) {
    // push body (newEntry) to array (existing entries)
    const newEntry = body;
    dataArray.push(newEntry);
    // write to correct json file based on name passed as fileName
    fs.writeFileSync(
        path.join(__dirname, `../data/${fileName}.json`),
        // JSON.stringify incoming json data to string
        JSON.stringify({ volunteers: dataArray }, null, 2)
    );
    // return newEntry
    return newEntry;
};

const findById = function (id, dataArray) {
    const result = dataArray.filter(entry => entry.id === id)[0];
    return result;
};

const updateCat = function (id, body, dataArray) {
    // filter out cats by id for result
    const result = dataArray.filter(entry => entry.id === id)[0];
    if(body.name) {
        result.name = body.name;
    }
    if (body.breed) {
        result.breed = body.breed;
    }
    if (body.color) {
        result.color = body.color;
    }
    if (body.temperament) {
        result.temperament = body.temperament;
    }
    return result;
}

const updateVolunteer = function (id, body, dataArray) {
    // filter out by id for result
    const result = dataArray.filter(entry => entry.id === id)[0];
    if(body.name) {
        result.name = body.name;
    }
    if (body.schedule) {
        result.schedule = body.schedule;
    }
    return result;
}

const removeCat = function (id, dataArray, fileName) {
    // filter out cats by id for result
    const result = dataArray.filter(entry => entry.id === id)[0];
    // find index of cat by id
    const index = dataArray.findIndex(el => el.id === id);
    // remove one element at the index
    dataArray.splice(index, 1);
    // write to correct file
    fs.writeFileSync(
        path.join(__dirname, `../data/${fileName}.json`),
        JSON.stringify({ cats: dataArray }, null, 2)
    );
    // return item to be deleted
    console.log(`Cat ID ${id} removed from ${fileName}.json`);
    return result;
}

const removeVolunteer = function (id, dataArray, fileName) {
    // filter out cats by id for result
    const result = dataArray.filter(entry => entry.id === id)[0];
    // find index of cat by id
    const index = dataArray.findIndex(el => el.id === id);
    // remove one element at the index
    dataArray.splice(index, 1);
    // write to correct file
    fs.writeFileSync(
        path.join(__dirname, `../data/${fileName}.json`),
        JSON.stringify({ volunteers: dataArray }, null, 2)
    );
    // return item to be deleted
    console.log(`Volunteer ${result.name} removed from ${fileName}.json`);
    return result;
}

module.exports = { 
    addCat, 
    addVolunteer, 
    findById, 
    updateCat, 
    updateVolunteer, 
    removeCat, 
    removeVolunteer 
};