import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const result = await StudentServices.createStudentIntoDb(student);

    res.status(200).json({
      success: true,
      data: result, // Optionally return the created student data
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      err: error,
    });
  }
};
const getAllStudentsData = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentData();

    res.status(200).json({
      success: true,
      data: result, // Optionally return the created student data
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      err: error,
    });
  }
};

export const studentControlers = { createStudent, getAllStudentsData };
