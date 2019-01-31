const express = require('express')

const port = process.env.PORT || 3001
const appName = 'App Y'
const app = express()

app.get('/', (req, res) => {
  res.send(appName)
})

app.listen(port, () => {
  console.log(`${appName} running on ${port}`)
})
