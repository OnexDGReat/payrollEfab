// ...existing code...
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const login = async (req, res) => {
  console.log('Login request body:', req.body);
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, error: 'Database not connected' });
    }

    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'email and password required' });
    }

    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(401).json({ success: false, error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, error: 'Invalid credentials' });

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY || 'dev-secret',
      { expiresIn: '10d' }
    );

    return res
    .status (200)
    .json ({ 
      success: true, 
      token, 
      user: { id: user._id, email: user.email, username: user.username, role: user.role,} });
      
     

  } catch (err) {
    console.error('Login handler error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

const verify = async (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
}

export {verify};