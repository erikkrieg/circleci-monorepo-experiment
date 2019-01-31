const express = require('express')

const port = process.env.PORT || 3000
const appName = 'App X'
const app = express()

app.get('/', (req, res) => {
  res.send(appName)
})

app.listen(port, () => {
  console.log(`${appName} running on ${port}`)
})
