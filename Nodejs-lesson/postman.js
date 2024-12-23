const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let phonebookArr = [
    {
        id: 1,
        person: "Xeyal",
        phone: "+994 077 562 33 25"
    }
];

app.post("/phonebook", (req, res) => {
    phonebookArr.push(req.body)
    res.send(phonebookArr)
});

app.get("/phonebook", (req, res) => {
    res.send(JSON.stringify(phonebookArr))
})

app.delete("/phonebook/:id", (req, res) => {
    phonebookArr = phonebookArr.filter((phone) => phone.id != req.params.id)
    res.send(phonebookArr)
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log("listening port")
})