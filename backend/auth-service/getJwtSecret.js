const fs = require('fs');

function getJwtSecret() {
  try {
    return fs.readFileSync('/run/secrets/jwt_secret', 'utf8').trim();
  } catch (err) {
    return process.env.JWT_SECRET;
  }
}

module.exports = getJwtSecret;