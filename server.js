const express = require('express');
const app = express();
const { Stack } = require('./Stack.js');

app.use(express.json());



app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Heelo world');
})

// endpoints
app.post('/lint', (req, res) => {
  const stack = new Stack()

  res.send(stack)
});

// listen
app.listen(7890, () => {
  console.log('started on 7890');
});
