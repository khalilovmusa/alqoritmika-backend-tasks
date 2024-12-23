const express = require('express');
const app = express();

const cards = [
  {id: 1, card: "Musanin karti", number: "1234 5678 9101 2345"},
  {id: 2, card: "Xeyalin karti", number: "5612 5678 1234 2345"},
  {id: 3, card: "Shalbuzun karti", number: "4569 5678 1522 2345"},
  {id: 4, card: "Shalbuzun karti", number: "4569 5678 1522 2345"},
  {id: 5, card: "Shalbuzun karti", number: "4569 5678 1522 2345"},
  {id: 6, card: "Shalbuzun karti", number: "4569 5678 1522 2345"},
  {id: 7, card: "Shalbuzun karti", number: "4569 5678 1522 2345"}
]

app.get('/card/:id', (req, res) => {
  const card = cards.find((card) => card.id == req.params.id)
  if(card){
    res.send(JSON.stringify(card));
    return
  }
  res.status(404).send("Card does not exist!!");
});

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
});