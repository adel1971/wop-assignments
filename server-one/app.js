'use script';
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')
app.set('views', './view');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/kokeilu',  (reg, res) => {
  res.render('test')
});

app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    birthdate: '2010-12-25',
    weight: 15,
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})