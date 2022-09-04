const router = require('express').Router();

const services = require('../services/render');
router.get('/',services.homeRoutes);
router.get('/add-user',services.add_user);
router.get('/update-user',services.update_user);
module.exports = router