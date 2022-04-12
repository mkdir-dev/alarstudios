const Contact = require('../models/contact');

const BadRequestError = require('../errors/400 - BadRequestError');
const NotFoundError = require('../errors/404 - NotFoundError');
const ConflictError = require('../errors/409 - ConflictError');
const InternalServerError = require('../errors/500 - InternalServerError');

const { contactErr } = require('../errors/errorMessages');
const { messages } = require('../utils/constants');

const {
  SUCCESS_OK,
} = require('../errors/errorStatuses');

module.exports.createContact = (req, res, next) => {
  const {
    name, phone,
  } = req.body;

  Contact.create({
    name, phone,
  })
    .then((contact) => res.status(SUCCESS_OK).send(contact))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(contactErr.ValidationError);
      }
      if (err.name === 'CastError') {
        throw new BadRequestError(contactErr.BadRequestError);
      }
      if (err.name === 'MongoError' && err.code === 11000) {
        throw new ConflictError(contactErr.ConflictError);
      }
      throw new InternalServerError(contactErr.InternalServerError);
    })
    .catch(next);
};

module.exports.getContacts = (req, res, next) => {
  Contact.find({})
    .then((contacts) => res.status(SUCCESS_OK).send(contacts))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError(contactErr.BadRequestError);
      }
      throw new InternalServerError(contactErr.InternalServerError);
    })
    .catch(next);
};

module.exports.updateContact = (req, res, next) => {
  const { id } = req.params;

  const {
    name, phone,
  } = req.body;

  Contact.findByIdAndUpdate(
    id, { name, phone },
    { new: true, runValidators: true },
  )
    .orFail(new Error('NotFound'))
    .then((contact) => res.status(SUCCESS_OK).send(contact))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError(contactErr.BadRequestError);
      }
      if (err.message === 'NotFound') {
        throw new NotFoundError(contactErr.NotFoundError);
      }
      if (err.name === 'MongoError' && err.code === 11000) {
        throw new ConflictError(contactErr.ConflictError);
      }
      throw new InternalServerError(contactErr.InternalServerError);
    })
    .catch(next);
};

module.exports.deleteContact = (req, res, next) => {
  const { id } = req.params;

  Contact.findByIdAndRemove(id)
    .then(() => res.status(SUCCESS_OK).send({
      message: messages.deletedContact,
    }))
    .catch(() => {
      throw new NotFoundError(contactErr.NotFoundError);
    })
    .catch(next);
};