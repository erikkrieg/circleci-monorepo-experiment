const express = require('express')
const renderHomePage = require('./renderHomePage')

const port = process.env.PORT || 3000
const appName = 'App Y'
const app = express()

app.get('/', (req, res) => {
  res.send(renderHomePage(appName))
})

app.get('/status', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`${appName} running on ${port}`)
})
