import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Your MySQL password
    database: "tradingplatformdb" // Your MySQL database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// GET ALL USERS
app.get('/', (req, res) => {
    // Define the available API endpoints
    const apiUrls = {
        'user': {
            'GET': '/users',
            'GET': '/userid/:id',
            'POST': '/addusers',
            'PUT': '/updateuser/:id',
            'DELETE': '/deleteuser/:id'
        },
        'category': {
            'GET': '/category'
        },
        'product': {
            'GET': '/product'
        },
        'transaction': {
            'GET': '/transaction'
        }
    };
    res.status(200).json(apiUrls);
});

// GET ALL USERS
app.get('/users', (req, res) => {
    console.log('users.');
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(result);
    });
});

app.get('/getuser/:id', (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT * FROM users WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ error: 'Error fetching user' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        return res.status(200).json(result[0]);
    });
});

app.post('/addusers', (req, res) => {
    console.log('Received request to add user.');
    const datenow = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const { username, email, password, type } = req.body;
    if (!username || !email || !password || !type) {
        return res.status(400).json({ error: "All fields (username, email, password, type) are required." });
    }
    const sql = `
        INSERT INTO users (username, email, password, created_at, type)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [username, email, password, datenow, type];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ error: "Error inserting user." });
        }
        return res.status(200).json({ message: "User added successfully.", userId: result.insertId });
    });
});

app.put('/updateuser/:id', (req, res) => {
    console.log('Received request to update user.');

    const userId = req.params.id;
    const { username, email, password, type } = req.body;
    const datenow = new Date().toISOString().slice(0, 19).replace('T', ' ');
    if (!username || !email || !password || !type) {
        return res.status(400).json({ error: 'All fields (username, email, password, type) are required.' });
    }
    const sql = `
        UPDATE users
        SET username = ?, email = ?, password = ?, created_at = ?, type = ?
        WHERE user_id = ?
    `;
    const values = [username, email, password, datenow, type, userId];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error updating user:', err);
            return res.status(500).json({ error: 'Error updating user.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        return res.status(200).json({ message: 'User updated successfully.' });
    });
});

app.delete('/deleteuser/:id', (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM users WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ error: 'Error deleting user' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        return res.status(200).json({ message: 'User deleted successfully.' });
    });
});


app.listen(8081, () => { // Port
    console.log("Listening on port 8081");
});
