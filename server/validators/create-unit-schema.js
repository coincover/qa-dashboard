const yup = require('yup');

const DATE_REGEX = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

const createUnitSchema = yup
  .object({
    date: yup.string().matches(DATE_REGEX, 'date must be in the format YYYY-MM-DD'),
    percentage: yup.string().required(),
    commit: yup.string().required(),
    pull_request: yup.string().required()
  })
  .required();

module.exports = createUnitSchema;
