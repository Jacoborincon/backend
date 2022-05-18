const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4000;

app.get('/', (req, res) => {
  res.send('<h1>hola bbsito!</h1>')
})

app.post('/register', (req, res) => {
  let name = req.body.name
  let password = req.body.password
  res.send(`su nombre es: ${name} y su password es:${password}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
