const router = require('express').Router();

const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require('../controllers/contact');

const { contactValidation } = require('../middlewares/validation');

router.get('/', getContacts);
router.post('/create', contactValidation, createContact);
router.patch('/:id', contactValidation, updateContact);
router.delete('/:id', deleteContact);

module.exports = router;