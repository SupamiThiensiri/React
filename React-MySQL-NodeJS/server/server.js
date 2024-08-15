import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactmysql"
})

// GET USER ALL
app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result)
    })
})
// GET USER ID
app.get('/userid/:id', (req, res) => {
    const sql = "SELECT * FROM users WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result)
    })
})
// ADD USER
app.post('/addusers', (req, res) => {
    const sql = "INSERT INTO users (`username`,`email`) VALUE (?)";
    const values =[
        req.body.username,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})
// EDIT USER
app.put('/updateuserid/:id', (req, res) => {
    const sql = "UPDATE users SET `username`=?,`email`=? WHERE `id`=?";
    const id = req.params.id;
    db.query(sql, [req.body.username, req.body.email, id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result)
    })
})
// DEL USER
app.delete('/deleteuserid/:id', (req, res) => {
    const sql = "DELETE FROM users WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result)
    })
})

app.listen(8081, ()=> {
    console.log("Listening");
})