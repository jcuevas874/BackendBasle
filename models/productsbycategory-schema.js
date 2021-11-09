const Joi = require('joi');

const validSchema = joi.object({
    parameter: Joi.string()
})

module.exports = validSchema