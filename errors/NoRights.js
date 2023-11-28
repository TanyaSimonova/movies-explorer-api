class NoRights extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoRights';
    this.statusCode = 403;
  }
}

module.exports = NoRights;
