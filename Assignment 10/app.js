import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ================= MIDDLEWARE =================

app.use(express.urlencoded({ extended: true }));


// ================= VIEW ENGINE =================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ================= STUDENT ARRAY =================

let students = [
    { id: 1, name: "Ankit", course: "BCA", marks: 88 },
    { id: 2, name: "Riya", course: "MCA", marks: 92 }
];


// ================= HOME PAGE =================

app.get("/", (req, res) => {
    res.render("index", { students });
});


// ================= ABOUT PAGE =================

app.get("/about", (req, res) => {
    res.render("about");
});


// ================= CONTACT PAGE =================

app.get("/contact", (req, res) => {
    res.render("contact");
});


// ================= SHOW ADD FORM =================

app.get("/students/add", (req, res) => {
    res.render("add");
});


// ================= SAVE STUDENT =================

app.post("/students/save", (req, res) => {

    const { name, course, marks } = req.body;

    // Validation

    if (!name || !course || !marks) {
        return res.send("All fields are required");
    }

    if (marks < 0 || marks > 100) {
        return res.send("Marks should be between 0 and 100");
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course,
        marks
    };

    students.push(newStudent);

    res.redirect("/");
});


// ================= SHOW EDIT FORM =================

app.get("/students/edit/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    res.render("edit", { student });
});


// ================= UPDATE STUDENT =================

app.post("/students/update/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { name, course, marks } = req.body;

    // Validation

    if (!name || !course || !marks) {
        return res.send("All fields are required");
    }

    if (marks < 0 || marks > 100) {
        return res.send("Marks should be between 0 and 100");
    }

    const student = students.find(s => s.id === id);

    if (student) {

        student.name = name;
        student.course = course;
        student.marks = marks;

    }

    res.redirect("/");
});


// ================= DELETE STUDENT =================

app.get("/students/delete/:id", (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.redirect("/");
});


// ================= SERVER =================

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});