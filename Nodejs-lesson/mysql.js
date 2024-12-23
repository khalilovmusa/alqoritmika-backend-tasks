const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'test'
})

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the db" + err.stack);
    }
    console.log("Connected to the database")
});

// connection.query('SELECT * FROM test.users', (error, results) => {
//     // res.send(JSON.stringify(results))
//     console.log(results)
// })

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM test.users', (error, results) => {
        // res.send(JSON.stringify(results))
        res.send(results);
        console.log(results)
    })
})


// INSERT INTO users
//   (username, age, email, birth_date)
// VALUES
//   ('Jane Smith', 29, 'jane@company.com', '1991-05-19'),
//   ('Sam Stone', 49, 'sams@company.com', '1971-01-07');


app.post('/users', (req, res) => {
    const { name, email} = req.body;
  connection.query(`INSERT INTO test.users (name, email) VALUES (?,?) ('${name}')`, [name,email], (error, results) => {
      if (error) {
          console.error('Error inserting user into the database: ' + error.stack);
          return res.status(500).json({ error: 'Failed to insert user' });
      }

      
    // Send a success response
    res.json({ message: 'User inserted successfully' });
  });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;

    connection.query(`DELETE FROM test.users WHERE id=${id}`, (err, result) => {
        if(err) {
            console.error(`An error ocurred!: ${err}`);
            return;
        }
        console.log("Deleted successfully")
        res.send("succesfully deleted")
    })
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;

    connection.query(``)
})

app.listen(3000, () => {
    console.log("Listening to the port 3000")
})