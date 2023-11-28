class NoDuplicate extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoDuplicate';
    this.statusCode = 409;
  }
}

module.exports = NoDuplicate;
