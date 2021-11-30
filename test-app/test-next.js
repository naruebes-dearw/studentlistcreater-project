const express = require('express')
const app = express()

app.get('/home', mid, (req, res, next) => {
  console.log('home page')
  res.send('home page')
  next()
})


app.get('/home', (req, res, next) => {
  next()
  console.log('home page 2')
})

function mid(req, res, next) {
  console.log('middleware')
  next('route')
}

app.use((req, res, next) => {
  console.log('hi not found')
})
app.use((req, res, next) => {
  res.send('this page not found')
})


app.listen(5555, () => {
  console.log('listening to port 5555....')
})