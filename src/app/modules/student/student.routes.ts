import express from 'express';
import { studentControlers } from './student.controler';

const router = express.Router();

router.post('/create-student', studentControlers.createStudent);
router.get('/get-all-student', studentControlers.getAllStudentsData);

export const StudentRoutes = router;
