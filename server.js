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
    ')': '(',
    '}': '{',
    ']': '[',
}
app.use(express.json());

// endpoints
app.post('/lint', (req, res) => {
    const brackets = strip(req.body.code);
    const object = Object.keys(pairs).includes(brackets);
    console.log(object)

    const stack = new Stack()
    let prove = {'success' : true}

    brackets.map(bracket => {
        const peek = stack.peek();
        if (Object.keys(pairs).includes(bracket)) {
            stack.push(bracket)
        } else {
            for(const [key, value] of Object.entries(brackets))
        {
            if(bracket === value && peek !== key) {
                console.log(bracket)
                prove = {
                    "error": `missing ${bracket}`
                    };
                } else if (bracket === key && peek === value) {
                    stack.pop()
                }
            }
        }
    })
    res.send(stack)
});





// listen
app.listen(3020, () => {
  console.log('started on 3020');
});



