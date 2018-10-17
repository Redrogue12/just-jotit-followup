const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()

let server

const app = express()

//middleware
app.use(morgan('combined'))
app.use(express.json())
app.use(express.static('./public'))

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found.'
  })
})

function startServer() {
  return new Promise(('placeholder', { usenewUrlParser: true }, err => {
    if (err) {
      console.error(err)
      return reject()
    }

    server = app.listen(8080, () => {
      console.log('Express server listening on http://localhost:8080');
    })
  }))
}

function stopServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      server.close(err => {
        if (err) {
          console.log(err)
          return reject(err)
        }
        console.log('Express server shut down.');
        resolve()
      })
    })
  })
}
