import bcrypt from 'bcryptjs';

// Replace with the hash from your DB (keep the quotes)
const hash = '$2b$10$S026E8TUrSqF9yoPWCDaqeZsHwnKjFjktNQQygVC/UmNVEsvtqg6/a';
const plain = 'Admin'; // password you expect

bcrypt.compare(plain, hash)
  .then(match => console.log('match?', match))
  .catch(err => console.error('error comparing:', err));