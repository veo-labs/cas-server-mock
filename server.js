'use strict';

require('./processRequire.js');
const nopt = require('nopt');
const Server = process.require('lib/Server.js');
let database = process.require('lib/database.js');
let port;

// Process list of arguments
const knownProcessOptions = {
  port: [String, null],
  database: [String, null]
};

// Parse process arguments
const processOptions = nopt(knownProcessOptions, null, process.argv);

// Validate arguments
port = processOptions.port || 3004;

// Load database
try {
  database.users = require(processOptions.database);
} catch (error) {
  throw new Error(`Invalid arguments: ${error.message}`);
}

const server = new Server(port);
server.start();
