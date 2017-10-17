# Apereo CAS simple server mock

Really simple basic mock for [Apereo CAS server](https://www.apereo.org/projects/cas). This should not be used in production environment, it is just for test purpose, nothing more.

# Install

    npm install cas-server-mock

# Usage

Start a fake CAS server with the following command:

    node node_modules/cas-server-mock/server.js --port=3004 --database=/tmp/users.json

With:

- --port option The HTTP port the server will listen to (default to 3004)
- --database The path to the JSON file containing the database of users (see below)

**Nb:** If process is launched as a sub process it will send a message to its parent process when starting:

```json
{status: 'started'}
```

## CAS users

The database user must be a simple JSON file containing an array of users. Each user must have a *name* property used to authenticate the user and a *attributes* property with as many properties as you want. Attributes values must be either Strings or Arrays.

```json
[
  {
    "name": "user-id", // The id of the user to log with
    "attributes": { // User attributes
      "stringAttribute": "value",
      "arrayAttribute": "arrayValue",
      [...]
    }
  }
]
```

# Contributors

Maintainer: [Veo-Labs](http://www.veo-labs.com/)

# License

[AGPL](http://www.gnu.org/licenses/agpl-3.0.en.html)
