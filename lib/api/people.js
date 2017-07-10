const {HOSTNAME} = require('./config');
const request = require('./utils/request');

const PATH = 'people/';

/**
 * Returns the list of people
 *
 * @return {Promise}
 */
const list = () => {
  return request(HOSTNAME + PATH);
}

/**
 * Returns a person with given id
 *
 * @param {Number} id
 *
 * @return {Promise}
 */
const get = (id) => {
  return request(HOSTNAME + PATH + id + '/');
}

const schema = () => {
  return request(HOSTNAME + PATH + 'schema');
}

/**
 * Search for a person by name
 *
 * @param {String} term
 *
 * @return {Promise}
 */
const find = (term) => {
  return request(HOSTNAME + PATH + '?search=' + term);
}

module.exports = {
  get,
  list,
  schema,
  find
}