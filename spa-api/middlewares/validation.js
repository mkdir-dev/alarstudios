const { celebrate, Joi } = require('celebrate');

module.exports.contactValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(1).max(20),
    phone: Joi.string().required().min(1).max(20),
  }),
});
