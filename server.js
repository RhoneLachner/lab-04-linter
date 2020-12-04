const express = require('express');
const app = express();
const { Stack } = require('./Stack.js');


const strip = code => {
    const express = code => {
        const patterns = /\(|\)|\{|\}|\[|\]/g;
        return code.match(patterns);
    }
};
const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
}
app.use(express.json());

// endpoints
app.post('/lint', (req, res) => {

const brackets = strip(req.body.code);

Object.keys(pairs).includes(brackets);

const stack = new Stack()

res.send(stack)
});

// listen
app.listen(3000, () => {
  console.log('started on 3000');
});



