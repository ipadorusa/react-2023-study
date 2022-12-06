const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

function logger(req, res, next) {
  console.log("'i'm logger");
  next();
}

app.use(logger);
app.use(morgan('dev'));

app.listen(3000, () => {
  console.log(`server is running`)
})
