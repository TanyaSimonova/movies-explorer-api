const jwt = require('jsonwebtoken');
const NotAuthenticated = require('../errors/NoAuthenticated');

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  let payload;
  try {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new NotAuthenticated('Authorization required');
    }
    const token = authorization.replace('Bearer ', '');
    payload = jwt.verify(token, NODE_ENV ? JWT_SECRET : 'jwt-secret-key');
  } catch (e) {
    if (e.name === 'JsonWebTokenError') {
      return next(new NotAuthenticated('Problems with the token'));
    }
    return next(e);
  }
  req.user = payload;
  return next();
};
