import mongoose from 'mongoose';

// SETUP SCHEMA
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
