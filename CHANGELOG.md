# 2.0.2 / YYYY-MM-DD

## DEPENDENCIES

- add NPM package-lock.json
- **body-parser** has been upgraded from 1.18.2 to **1.19.0**
- **consolidate** has been upgraded from 0.14.5 to **0.15.1**
- **cookie-parser** has been upgraded from 1.4.3 to **1.4.5**
- **express** has been upgraded from 4.16.1 to **4.17.1**
- **mustache** has been upgraded from 2.3.0 to **3.1.0**
- **nopt** has been upgraded from 4.0.1 to **4.0.3**

# 2.0.1 / 2020-01-13

## BUG FIXES

- Fix redirect after authentication when service has querystring

# 2.0.0 / 2018-10-16

## BREAKING CHANGES

- Drop support for NodeJS < 8.9.4 and NPM < 5.6.0

## FEATURES

- Add support for CAS protocol 2.0 in addition to 3.0.2
- Add NPM package-lock.json file

## BUG FIXES

- Fix missing angular.js and angular-route.min.js files
- Load minified version of AngularJS

# 1.0.0 / 2017-10-18

## FEATURES

- Add a basic CAS server mock to test authentication on services using an Apereo CAS server
