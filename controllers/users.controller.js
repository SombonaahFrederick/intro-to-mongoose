const { query } = require("express");

const getUsers = (req, res) => {
  res.status(200).send(`Get All Users filtered by"${req.query.tittle}"`);
};

const getUser = (req, res) => {
  res.status(200).send("Get single User");
};

const createUser = (req, res) => {
  res.status(200).send("Create User");
};

const updateUser = (req, res) => {
  res.status(201).send(`User with ID ${req.params.UserId} has been updated`);
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
