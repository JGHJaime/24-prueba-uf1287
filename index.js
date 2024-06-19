const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get
const sumar = (req, res) => {

  var sumando1 = Number(req.query.Sumando1)
  var sumando2 = Number(req.query.Sumando2)
  var resultado = (sumando1 + sumando2)

  res.send(`Suma: ${sumando1} + ${sumando2} = ${resultado}`)

}
app.get('/suma', sumar)

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
