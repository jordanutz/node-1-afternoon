const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())

// CONTROLLERS
app.get('/api/messages', controller.get)
app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)

const PORT = 1993

app.listen(PORT, () => {
  console.log(`Running on port ${PORT} 🦎`)
})
