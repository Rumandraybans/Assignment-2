const express = require("express");
const mysql = require("mysql2");
const app = express();
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password@123",
    database: "test"
});

mysqlConnection.connect((err) => {

    if(err){
        console.log(err);
    }
    else{
        console.log("MySQL Connected Successfully");
    }

});

// using Crud operation in mySql 

//create
app.get("/add", (req, res) => {
    let sql =
    "INSERT INTO students(name, course) VALUES('Tarun','JS')";
    mysqlConnection.query(sql, (err, result) => {
        if(err){
            res.send("Insert Error");
        }
        else{
            res.send("Data Inserted");
        }

    });

});

//READ
app.get("/read", (req, res) => {

    let sql = "SELECT * FROM students";

    mysqlConnection.query(sql, (err, result) => {

        if(err){
            res.send("Read Error");
        }
        else{
            res.send(result);
        }

    });

});

// Upadte 
app.get("/update", (req, res) => {
    let sql =
    "UPDATE students SET course='ReactJS' WHERE id=4";
    mysqlConnection.query(sql, (err, result) => {
        if(err){
            res.send("Update Error");
        }
        else{
            res.send("Data Updated");
        }
    });

});

//delete
app.get("/delete", (req, res) => {
    let sql =
    "DELETE FROM students WHERE id=1";
    mysqlConnection.query(sql, (err, result) => {
        if(err){
            res.send("Delete Error");
        }
        else{
            res.send("Data Deleted");
        }
    });

});

app.listen(3000, () => {
    console.log("Server Running");
});
