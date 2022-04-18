// require express router
const router = require('express').Router();
// require data files
const { cats } = require('../../data/cats');
// require helper functions
const { 
    addCat, 
    findById, 
    updateCat, 
    removeCat, 
} = require('../../utils/helpers');

// define routes CRUD
// get all cats at '/' (will use /api/cats)
router.get('/', (req, res) => {
    res.json(cats);
});

// find single cat by id
router.get('/:id', (req, res) => {
    const cat = findById(req.params.id, cats);
    if (cat) {
        res.json(cat);
      } else {
        res.sendStatus(404);
      }
});

// add cat to data
router.post('/', (req, res) => {
    const cat = addCat(req.body, cats, 'cats');
    res.json(cat);
});

// update cat, need id
router.put('/:id', (req, res) => {
    const cat = updateCat(req.params.id, req.body, cats);
    res.json(cat);
});

// delete cat by id
router.delete('/:id', (req, res) => {
    const cat = removeCat(req.params.id, cats, 'cats');
    res.json(cat);
});

// export router
module.exports = router;