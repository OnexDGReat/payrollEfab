// ...existing code...
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import { fileURLToPath } from 'url';

dotenv.config();

const seedUsers = async () => {
  if (!process.env.MONGO_URI) {
    console.error('FATAL: MONGO_URI not defined in .env');
    throw new Error('MONGO_URI not defined');
  }

  let openedLocalConnection = false;
  try {
    // connect only if not already connected
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
      });
      openedLocalConnection = true;
      console.log('Seeder: connected to MongoDB');
    }

    const hashPassword = await bcrypt.hash('Admin', 10);

    await User.deleteMany({});
    const newUser = new User({
      username: 'admin',
      email: 'admin@gmail.com',
      password: hashPassword,
      role: 'admin',
      profileImage: '',
    });
    await newUser.save();
    console.log('New admin user created!');
  } catch (err) {
    console.error('Seeder error:', err);
    throw err;
  } finally {
    if (openedLocalConnection) {
      await mongoose.disconnect();
      console.log('Seeder: disconnected from MongoDB');
    }
  }
};

const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
  // only run when executed directly: `node server/userSeed.js`
  seedUsers()
    .then(() => process.exit(0))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

export default seedUsers;
// ...existing code...