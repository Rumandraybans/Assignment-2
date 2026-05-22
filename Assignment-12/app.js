import express from 'express';
import mongoose from 'mongoose';
import path from 'url';
import { fileURLToPath } from 'url';
import pathModule from 'path';

import studentRoutes from './routes/studentRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathModule.dirname(__filename);

app.use(express.urlencoded({extended:true}));
app.use(express.static(pathModule.join(__dirname,'public')));
app.set('view engine','ejs');

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=> {
    console.log("Database Connected");
})
.catch((error)=> {
    console.log(error.message);
});

app.use('/students', studentRoutes);


app.get('/about-us', (req, res) => {
    res.send(`
        <div style="font-family: system-ui, sans-serif; text-align: center; padding: 50px;">
            <h2>About Our Institution</h2>
            <p>Welcome to Student Management System .</p>
            <a href="/students" style="color: #0d6efd; text-decoration: none;">&larr; Back to Dashboard</a>
        </div>
    `);
});

app.get('/contact-us', (req, res) => {
    res.send(`
        <div style="font-family: system-ui, sans-serif; text-align: center; padding: 50px;">
            <h2>Contact Administration Team</h2>
            <p>For system inquiries or administrative support, email: support@management.com</p>
            <a href="/students" style="color: #0d6efd; text-decoration: none;">&larr; Back to Dashboard</a>
        </div>
    `);
});

app.listen(3000, () => {
    console.log(" Server successfully started!");
    console.log("Access at: http://localhost:3000/students");
});