const Joi = require("@hapi/joi");

const RegisterValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    username: Joi.string().min(2).required(),
    password: Joi.string().min(2).required(),
  });
  return schema.validate(data);
};

const LoginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    password: Joi.string().min(2).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = RegisterValidation;
module.exports.loginValidation = LoginValidation;
