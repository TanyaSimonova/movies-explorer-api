class NotAuthenticated extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotAuthenticated';
    this.statusCode = 401;
  }
}

module.exports = NotAuthenticated;
