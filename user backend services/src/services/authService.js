import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid username or password');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { user, token };
};

export const resetPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and new password are required');
  }
  const user = await User.findOne({ email});
  if (!user) throw new Error('User not found');
  user.password = password;
  await user.save();
};
