
// handle multiple async api calls

const getData = () => {
    try {
        const [a, b, c] = new Promise.all([
            api1(),
            api2(),
            api3()
        ])
        return { a, b, c };
    } catch (error) {
        console.error(error)
    }
}


// simple express api

import express from 'express';
const app = express();
app.use(express.json());

let users = [];

app.post('/user', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user)
})

app.get('/users', (req, res) => {
    const res = users.filter((user) => user.age > 25);
    res.json(res);
})

app.listen(3000);

