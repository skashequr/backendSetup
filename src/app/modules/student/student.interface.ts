// import { Schema, model, connect } from 'mongoose';

// Define the types
export type Guirdean = {
  father: string;
  mather: string; // Typo: should be "mother"
  motherOccupation: string;
  fatherOccupation: string; // Corrected spelling
  motherContact: string; // Corrected spelling
  fatherContact: string; // Corrected spelling
};

export type USerName = {
  fristName: string; // Typo: should be "firstName"
  middleName: string;
  lastName: string;
};

export type LocalGuirdean = {
  name: string;
  occupation: string;
  contactNo: string; // Corrected spelling
  address: string;
};

export type Student = {
  id: string;
  name: USerName;
  gender: 'male' | 'female'; // Corrected spelling
  dateOfBirth: string; // Changed type to string
  email: string;
  avatar?: string;
  contactNumber: string; // Corrected spelling
  emergencyNumber: string;
  bloodGroup: 'AB+' | 'B+' | 'B-' | 'O+' | 'O-'; // Added more blood types
  presentAddress: string;
  gurdean: Guirdean; // Typo: should be "guardian"
  localGuirdean: LocalGuirdean; // Typo: should be "guardian"
  profile?: string;
  isActive: 'active' | 'inactive';
};
