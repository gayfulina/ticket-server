const { Router } = require('express');

const upload = require('../utils/multerFileUploader');

const serviceHeader = require('../utils/serviceHeader');
const eventCreate = require('./controllers/create');
const eventGetById = require('./controllers/getById');
const eventSearch = require('./controllers/search');
const eventUpdateById = require('./controllers/updateById');
const eventDeleteById = require('./controllers/deleteById');
const eventStats = require('./controllers/stats');
const pauseController = require('../core/pauseController');
const eventAddImage = require('./controllers/addImage');

const router = Router();

// CRUD

router.get(
    '/stats', // GET /localhost:5000/event/stats
    serviceHeader('eventStats'), // mark request
    pauseController,
    eventStats,
);

router.post(
    '/', // POST /localhost:5000/event/stats
    serviceHeader('eventCreate'),
    eventCreate,
);

router.get('/:eventId', serviceHeader('eventGetById'), pauseController, eventGetById);

router.post('/search', serviceHeader('eventSearch'), pauseController, eventSearch);

router.patch(
    '/:eventId',
    serviceHeader('eventUpdateById'),
    pauseController,
    eventUpdateById,
);

router.delete(
    '/:eventId',
    serviceHeader('eventDeleteById'),
    pauseController,
    eventDeleteById,
);

router.put(
    '/:eventId/image',
    upload.single('image'),
    serviceHeader('eventAddImage'),
    pauseController,
    eventAddImage,
);

module.exports = router;
