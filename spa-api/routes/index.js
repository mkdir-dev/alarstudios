const router = require('express').Router();

const contactsRoutes = require('./contacts');

const NotFoundError = require('../errors/404 - NotFoundError');
const { serverErr } = require('../errors/errorMessages');

router.use('/contacts', contactsRoutes);

router.get('*', () => {
  throw new NotFoundError(serverErr.NotFoundError);
});

module.exports = router;