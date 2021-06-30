const { Router } = require('express');
const serviceHeader = require('../utils/serviceHeader');

const baseCreate = require('./controllers/create');
const baseGetById = require('./controllers/getById');
const baseSearch = require('./controllers/search');
const baseUpdateById = require('./controllers/updateById');
const baseDeleteById = require('./controllers/deleteById');
const baseStats = require('./controllers/stats');
const pauseController = require('../core/pauseController');

const router = Router();

// CRUD

router.get(
  '/stats', // GET /localhost:5000/base/stats
  serviceHeader('baseStats'), // mark request
  pauseController,
  baseStats,
);

router.post(
  '/', // POST /localhost:5000/base/stats
  serviceHeader('baseCreate'),
  baseCreate,
);

router.get(
  '/:baseId',
  serviceHeader('baseGetById'),
  pauseController,
  baseGetById,
);

router.post(
  '/search',
  serviceHeader('baseSearch'),
  pauseController,
  baseSearch,
);

router.patch(
  '/:baseId',
  serviceHeader('baseUpdateById'),
  pauseController,
  baseUpdateById,
);

router.delete(
  '/:baseId',
  serviceHeader('baseDeleteById'),
  pauseController,
  baseDeleteById,
);

module.exports = router;
