'use strict';
// catRoute
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('From this endpoint you can get cats')
})
router.get('/:id',  (req, res) => {

  res.send(`You requested a cat whose id is ${req.params.id}`);
});


// POST method route
router.post('/', (req, res) => {
  res.send('From this endpoint you can post cats')
})
router.put('/', (req, res) => {
  res.send('From this endpoint you can put cats')
})
router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats')
})
module.exports = router;