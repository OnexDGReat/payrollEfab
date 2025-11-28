import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const requireAuth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) return res.status(401).json({ success: false, error: 'No token' });
    const token = header.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_KEY || 'dev-secret');
    const user = await User.findById(payload._id).select('-password').exec();
    if (!user) return res.status(401).json({ success: false, error: 'User not found' });
    req.user = user;
    next();
  } catch (err) {
    console.error('authMiddleware error:', err);
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }
};
export default requireAuth;