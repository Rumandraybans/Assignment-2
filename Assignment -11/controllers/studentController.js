import Student from '../models/Student.js';

// 1. Add Student
export const addStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student); // 201 Created is more accurate
    } catch (error) {
        res.status(400).send(error.message); // Usually a validation failure (400)
    }
};

// 2. Get All Students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// 3. Get Student By ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.json(student);
    } catch (error) {
        // Distinguish between an invalid ID format and a server error
        if (error.kind === 'ObjectId') {
            return res.status(400).send("Invalid ID format");
        }
        res.status(500).send(error.message);
    }
};

// 4. Update Student
export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // runValidators ensures the updates follow your Schema rules
        );

        if (!student) {
            return res.status(404).send("Student not found");
        }

        res.json(student);
    } catch (error) {
        if (error.kind === 'ObjectId') return res.status(400).send("Invalid ID format");
        res.status(500).send(error.message);
    }
};

// 5. Delete Student
export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).send("Student not found to delete");
        }

        res.send("Student deleted successfully");
    } catch (error) {
        if (error.kind === 'ObjectId') return res.status(400).send("Invalid ID format");
        res.status(500).send(error.message);
    }
};

// 6. Search Students
export const searchStudents = async (req, res) => {
    try {
        const keyword = req.query.keyword;
        
        // Handle case where keyword is missing from query string
        if (!keyword) {
            return res.status(400).send("Keyword query parameter is required");
        }

        const students = await Student.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { course: { $regex: keyword, $options: 'i' } },
                { city: { $regex: keyword, $options: 'i' } }
            ]
        });

        res.json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
};