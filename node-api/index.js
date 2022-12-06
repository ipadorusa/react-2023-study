const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();


const users = [  
  {id:1, title: 'alice', completed: false},
  {id:2, title: 'bek', completed: false},
  {id:3, title: 'chris', completed: false},
];

app.use(cors());
app.use(morgan('dev'));

app.get('/users', (req, res) => {
  res.json(users);
})

app.listen(3000, () => {
  console.log(`server is running`)
})
