// require express router
const router = require('express').Router();
// require data files
const { cats } = require('../../data/cats');
// require helper functions
const { createNewEntry } = require('../../utils/helpers');

// define routes CRUD
// get all cats at '/' (will use /api/cats)
router.get('/', (req, res) => {
    res.json(cats);
});

// add cat to data
router.post('/', (req, res) => {
    const cat = createNewEntry(req.body, cats, 'cats');
    res.json(cat);
});

// update cat
router.put('/:id', (req, res) => {

});

// export router
module.exports = router;