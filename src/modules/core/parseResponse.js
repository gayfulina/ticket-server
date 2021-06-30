const bodyParser = require('body-parser');

function parseResponse(app) {
  app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
  app.use(bodyParser.json()); // support json encoded bodies
}

module.exports = parseResponse;
