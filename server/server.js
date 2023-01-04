//Express is for building the Rest apis
const express = require('express')
const mysql = require('mysql')


const cors = require("cors")
const app = express();

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

//Connect to MySQL
db.connect(err => {
    if (err) {
        throw err
    }
    console.log('My db SQL connected')
})



var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//Create Database
app.get('/createdb', (req, res) => {

    let sql = `CREATE DATABASE nodemysql`
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('Database Created')
    })
})

// Create Table
app.get('/createTaskTable', (req, res) => {
    let sql = `CREATE TABLE task(id int AUTO_INCREMENT, title VARCHAR(255), status BOOLEAN, PRIMARY KEY(id))`
    db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('task table created')
    })
})

//get task list
app.get('/getTasks', (req, res) => {
    let sql = `SELECT * FROM task`
    let query = db.query(sql, (err, tasks) => {
        if (err) {
            throw err
        }
        res.send({ tasks })
    })

})

// Add task
app.post('/addTask', (req, res) => {
    let sql = `INSERT INTO task SET ?`
    let query = db.query(sql, req.body.task, err => {
        if (err) {
            throw err
        }
        res.send('Task added successfully')
    })

})

//Update task
app.put('/updateTask', (req, res) => {
    let sql = `UPDATE task SET title= '${req.body.task.title}', status =${req.body.task.status} WHERE id= ${req.body.task.id}`
    let query = db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('Task updated successfully')
    })

})

//Delete task
app.delete('/deleteTask/:id', (req, res) => {
    let sql = `DELETE FROM task WHERE id= ${req.params.id}`
    let query = db.query(sql, err => {
        if (err) {
            throw err
        }
        res.send('Task deleted successfully')
    })
})


app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});



app.listen('3002', () => {
    console.log('Server started on port 3002')
})
