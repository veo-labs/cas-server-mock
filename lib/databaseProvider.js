'use strict';

/**
 * Manages the database of CAS users.
 *
 * @class databaseProvider
 * @static
 */

const database = process.require('lib/database.js');

/**
 * Fetches user from database.
 *
 * @method getUser
 * @static
 * @params {String} login User login
 * @return {Object} The user
 */
module.exports.getUser = (login) => {
  const users = database.users;
  for (let user in users) {
    if (users[user].name === login)
      return users[user];
  }

  return null;
};
