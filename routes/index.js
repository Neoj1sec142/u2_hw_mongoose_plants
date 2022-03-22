const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('This is root!'))

router.post('/plants', controllers.createPlant)

router.get('/plants', controllers.getAllPlants)

module.exports = router;