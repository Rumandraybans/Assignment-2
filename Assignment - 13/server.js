const express = require("express");
const mysql = require("mysql2");
const mongoose = require("mongoose");

const app = express();

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Passworrd@123",
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

mongoose.connect("mongodb://127.0.0.1:27017/testdb")

.then(() => {
    console.log("MongoDB Connected Successfully");
})

.catch((err) => {
    console.log("MongoDB Connection Error");
});


app.listen(3000, () => {
    console.log("Server Running");
});





