const express = require('express')
const app = express()
const port = 3000

app.use(express.static('/public'));

app.get('/suma', (req, res) => {
  
  res.send('Suma')
})
app.get('/hola', (req, res) => {
  
  res.send('Hello World!')
})
app.get('/multiplicacion', (req, res) => {
  
  res.send('multiplica!')
})
app.get('/lista-de-1', (req, res) => {
  
  res.send('lista')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
