const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

let users = [
    { id: 1, card: "Musanin karti", number: "1234 5678 9101 2345" },
    { id: 2, card: "Xeyalin karti", number: "5612 5678 1234 2345" },
    { id: 3, card: "Shalbuzun karti", number: "4569 5678 1522 2345" },
    { id: 4, card: "Shalbuzun karti", number: "4569 5678 1522 2345" },
    { id: 5, card: "Shalbuzun karti", number: "4569 5678 1522 2345" },
    { id: 6, card: "Shalbuzun karti", number: "4569 5678 1522 2345" },
    { id: 7, card: "Shalbuzun karti", number: "4569 5678 1522 2345" }
]

app.get('/user', (req, res) => {
    res.send(JSON.stringify(users));
})

app.put('/user/:id', (req, res) => {
    const idOfUser = +req.params.id;
    const userIdx = users.findIndex((user) => user.id === idOfUser);

    if (userIdx !== -1) {
        const oldUser = users[userIdx];
        users[userIdx] = {...oldUser, ...req.body}
        res.json(users[userIdx]);
    }else{
        res.status(404).json({errorMessage: "This user does not found!"});
    }
})

app.delete('/user/:id', (req, res) => {
    const indexOfUser = parseInt(req.params.id)
    users = users.filter((user) => user.id !== indexOfUser);

    res.json(users);
})



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
})