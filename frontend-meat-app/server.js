const express = require('express')
const app = express()

app.use(express.static(__dirname + '/app'))

app.listen(4001, () => console.log('Listening on port 4001!'))