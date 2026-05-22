import express from 'express';
import {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    searchStudents
} from '../controllers/studentController.js';

const router = express.Router();

// 1. Static search route (Must stay at the top)
router.get('/students/search', searchStudents);

// 2. Base collection routes
router.route('/students')
    .get(getStudents)
    .post(addStudent);

// 3. Dynamic element routes
router.route('/students/:id')
    .get(getStudentById)
    .put(updateStudent)
    .delete(deleteStudent);

export default router;