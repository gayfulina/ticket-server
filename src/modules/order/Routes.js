const { Router } = require('express');
const serviceHeader = require('../utils/serviceHeader');

const orderCreate = require('./controllers/create');
const orderGetById = require('./controllers/getById');
const orderSearch = require('./controllers/search');
const orderUpdateById = require('./controllers/updateById');
const orderDeleteById = require('./controllers/deleteById');
const orderStats = require('./controllers/stats');
const pauseController = require('../core/pauseController');

const router = Router();

// CRUD

router.get(
  '/stats', // GET /localhost:5000/order/stats
  serviceHeader('orderStats'), // mark request
  pauseController,
  orderStats,
);

router.post(
  '/', // POST /localhost:5000/order/stats
  serviceHeader('orderCreate'),
  orderCreate,
);

router.get(
  '/:orderId',
  serviceHeader('orderGetById'),
  pauseController,
  orderGetById,
);

router.post(
  '/search',
  serviceHeader('orderSearch'),
  pauseController,
  orderSearch,
);

router.patch(
  '/:orderId',
  serviceHeader('orderUpdateById'),
  pauseController,
  orderUpdateById,
);

router.delete(
  '/:orderId',
  serviceHeader('orderDeleteById'),
  pauseController,
  orderDeleteById,
);

module.exports = router;
