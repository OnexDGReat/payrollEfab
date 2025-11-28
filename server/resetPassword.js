import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();

const reset = async (email, newPassword) => {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI missing in .env'); process.exit(1);
  }
  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
  const hash = await bcrypt.hash(newPassword, 10);
  const u = await User.findOneAndUpdate(
    { email },
    { password: hash },
    { new: true, runValidators: true }
  );
  if (!u) console.log('User not found:', email);
  else console.log('Password updated for:', u.email);
  await mongoose.disconnect();
};

const [,, email, pass] = process.argv;
if (!email || !pass) {
  console.error('Usage: node resetPassword.js user@example.com NewPassword123'); process.exit(1);
}
reset(email, pass).then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });