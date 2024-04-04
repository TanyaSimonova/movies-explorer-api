const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, NODE_ENV } = process.env;
const userModel = require('../models/user');
const NotAuthenticated = require('../errors/NoAuthenticated');
const NotFound = require('../errors/NotFound');
const NotValid = require('../errors/NotValid');
const NoDuplicate = require('../errors/NoDuplicate');

const SALT_ROUNDS = 10;

const createUser = async (req, res, next) => {
  try {
    const {
      email, password, name,
    } = req.body;
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await userModel.create({
      email, password: hash, name,
    });
    return res.status(201).send({
      message: `New user ${newUser.email} successfully created`,
    });
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError || e instanceof mongoose.Error.CastError) {
      return next(new NotValid('Invalid data: please, сheck the email and password fields'));
    }
    if (e.code === 11000) {
      return next(new NoDuplicate('This email is already exist'));
    }
    return next(e);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }).select('+password').orFail(new NotAuthenticated('Incorrect email or password'));
    const matched = await bcrypt.compare(String(password), user.password);
    if (!matched) {
      throw new NotAuthenticated('Incorrect email or password');
    }
    const token = jwt.sign({ _id: user._id }, NODE_ENV ? JWT_SECRET : 'jwt-secret-key', { expiresIn: '7d' });
    return res.status(200).send({ token });
  } catch (e) {
    return next(e);
  }
};

const getProfile = (req, res, next) => userModel.findOne({ _id: req.user._id })
  .orFail(new NotFound('User not found'))
  .then((r) => res.status(200).send(r))
  .catch((e) => next(e));

const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.findByIdAndUpdate(req.user._id, { name, email }, { new: 'true', runValidators: 'true' });
    return res.status(200).send({ user, message: 'Successfully updated' });
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError || e instanceof mongoose.Error.CastError) {
      return next(new NotValid('Invalid data'));
    }
    if (e.code === 11000) {
      return next(new NoDuplicate('This email is already exist'));
    }
    return next(e);
  }
};

module.exports = {
  createUser,
  login,
  getProfile,
  updateUser,
};
