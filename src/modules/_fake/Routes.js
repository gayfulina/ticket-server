const { Router } = require('express');
const serviceHeader = require('../utils/serviceHeader');
const fakeGeneratorBase = require('./fakeGeneratorBase');
const fakeGeneratorEvent = require('./fakeGeneratorEvent');

const router = Router();

router.post('/base/:count', serviceHeader('fakeGeneratorBase'), fakeGeneratorBase);

router.post('/event/:count', serviceHeader('fakeGeneratorEvent'), fakeGeneratorEvent);

module.exports = router;
