// require router from express
const router = require('express').Router();
// require data file
const { volunteers } = require('../../data/volunteers.json');
// require helper functions
const {
    addVolunteer,
    findById,
    updateVolunteer,
    removeVolunteer
} = require('../../utils/helpers');

// CRUD operations

// get all volunteers at /api/volunteers endpoint
router.get('/', (req, res) => {
    res.json(volunteers);
});

router.get('/:id', (req, res) => {
    const result = findById(req.params.id, volunteers);
    res.json(result);
});

router.post('/', (req, res) => {
    const newPerson = addVolunteer(req.body, volunteers, 'volunteers');
    res.json(newPerson);
});

router.put('/:id', (req,res) => {
    const volunteer = updateVolunteer(req.params.id, req.body, volunteers);
    res.json(volunteer);
})

router.delete('/:id', (req,res) => {
    const removePerson = removeVolunteer(req.params.id, volunteers, 'volunteers');
    res.json(removePerson);
});

// export router
module.exports = router;