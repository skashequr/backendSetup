import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudentData = async () => {
  const result = await StudentModel.find();
  return result;
};
export const StudentServices = {
  createStudentIntoDb,
  getAllStudentData,
};
