const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseStringSchema = {
  type: String,
  maxLength: 100,
  required: true,
  trim: true,
};

const userSchema = mongoose.model('User', new Schema({
  firstname: baseStringSchema,
  lastname: baseStringSchema,
  email: {
    ...baseStringSchema,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  courses: [{
    name: baseStringSchema,
    role: {
      type: String,
      enum: ['student', 'teacher'],
      default: 'student',
    },
  }],
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
}));

const User = mongoose.model('User', userSchema);

module.exports = User;
