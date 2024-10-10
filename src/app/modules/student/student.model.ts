import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  Guirdean,
  LocalGuirdean,
  Student,
  USerName,
} from './student.interface';

const studentNameSchema = new Schema<USerName>({
  fristName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const gurdeanSchema = new Schema<Guirdean>({
  father: { type: String, required: true },
  mather: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherContact: { type: String, required: true }, // Corrected spelling
  fatherContact: { type: String, required: true }, // Corrected spelling
});

const localGuirdean = new Schema<LocalGuirdean>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true }, // Corrected spelling
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  name: {
    type: studentNameSchema,
    required: [true, 'Name is required'], // Custom message
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'Gender is required: {VALUE}', // Custom message for enum values
    },
    required: [true, 'Gender is required'], // Custom message for required
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a proper email type',
    },
  },
  avatar: { type: String },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
    validate: {
      validator: (value: string) => validator.isMobilePhone(value),
      message: 'frete',
    },
  },
  emergencyNumber: {
    type: String,
    required: [true, 'Emergency number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['AB+', 'B+', 'B-', 'O+', 'O-'],
      message: 'Blood group is required: {VALUE}', // Custom message for enum values
    },
    required: [true, 'Blood group is required'], // Custom message for required
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  gurdean: {
    type: gurdeanSchema,
    required: [true, 'Guardian information is required'], // Custom message
  },
  localGuirdean: {
    type: localGuirdean,
    required: [true, 'Local guardian information is required'], // Custom message
  },
  profile: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'], // Enum for active status
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);

// https://github.com/validatorjs/validator.js
