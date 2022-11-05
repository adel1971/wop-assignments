// userController
'use strict';
const {getUser, getAllUsers}= require('../models/userModel');
const user_list_get = async (req, res) => {
  res.json(await getAllUsers());
};

const user_get =  (req, res) => {
  const user = getUser(req.params.id);
  console.log('käyttäjä', user);
  res.json(user);
}
const  user_post = (req, res) => {
  console.log('user_post', req.body);
  res.send('Add user route');
}
module.exports = {
  user_list_get,
  user_get,
  user_post
};