class NotValid extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotValid';
    this.statusCode = 400;
  }
}

module.exports = NotValid;
