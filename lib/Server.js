'use strict';

/**
 * Defines a CAS Server.
 */

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const controller = process.require('lib/controller.js');

class Server {

  /**
   * Creates a new CAS HTTP server.
   *
   * @class Server
   * @constructor
   * @param {Number} port The HTTP port to listen to
   */
  constructor(port) {

    Object.defineProperties(this, {

      /**
       * Express application.
       *
       * @property app
       * @type Application
       */
      app: {
        value: express(),
        writable: true
      },

      /**
       * Server port.
       *
       * @property port
       * @type Number
       */
      port: {
        value: port,
        writable: true
      }

    });

    this.init();
    this.mountRoutes();
  }

  /**
   * Prepares server.
   *
   * @method init
   */
  init() {
    const staticServerOptions = {
      extensions: ['htm', 'html'],
      setHeaders: (response) => {
        response.set('x-timestamp', Date.now());
      }
    };

    this.app.engine('html', consolidate.mustache);
    this.app.set('view engine', 'html');
    this.app.set('views', path.join(process.root, 'assets/views'));
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    this.app.use(bodyParser.json());

    // Statically load assets
    this.app.use(express.static(path.normalize(`${process.root}/assets`), staticServerOptions));
    this.app.use(express.static(path.normalize(`${process.root}/node_modules/angular`), staticServerOptions));
    this.app.use(express.static(path.normalize(`${process.root}/node_modules/angular-route`), staticServerOptions));
  }

  /**
   * Mounts express routes.
   *
   * @method mountRoutes
   */
  mountRoutes() {
    this.app.get('/authenticate', controller.authenticateAction);
    this.app.get('/serviceValidate', controller.validateTicketAction); // CAS 2.0
    this.app.get('/p3/serviceValidate', controller.validateTicketAction); // CAS 3.0.2
    this.app.get('/logout', controller.logoutAction);

    // Handle not found routes
    this.app.all('*', function(request, response, next) {
      response.render('root');
    });
  }

  /**
   * Starts the server.
   *
   * @method start
   */
  start() {
    this.app.listen(this.port, () => {
      process.stdout.write(`CAS server listening on port ${this.port}\n`);

      // If process is a child process, send an event to parent process informing that the server has started
      if (process.connected)
        process.send({status: 'started'});

    });
  }

}

module.exports = Server;
