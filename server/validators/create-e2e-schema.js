const yup = require('yup');

const DATE_REGEX = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

const createE2eSchema = yup
  .object({
    date: yup.string().matches(DATE_REGEX, 'date must be in the format YYYY-MM-DD'),
    pass: yup.string().required(),
    fail: yup.string().required(),
    skip: yup.string().required()
  })
  .required();

module.exports = createE2eSchema;
