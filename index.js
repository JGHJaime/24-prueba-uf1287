const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

const sumar = (req, res) => {

  var sumando1 = Number(req.query.Sumando1)
  var sumando2 = Number(req.query.Sumando2)
  var resultado = (sumando1 + sumando2)

  res.send(`Suma: ${sumando1} + ${sumando2} = ${resultado}`)

}
app.get('/suma', sumar);

const multiplicar = (req, res) => {

  var multi1 = Number(req.query.Sumando1)
  var multi2 = Number(req.query.Sumando2)
  var resultado = (multi1 * multi2)

  res.send(`Multiplicar: ${multi1} * ${multi2} = ${resultado}`)

}
app.get('/multiplicacion', multiplicar);

app.get('/listade1',(req, res) =>{
  var a = Number(req.query.a)
  var lista = []
    for(i = 1; i <= a; i++){
      lista.push(i)
    }
    res.send(`${lista}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
