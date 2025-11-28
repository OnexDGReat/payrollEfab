// // import express from 'express';
// // import cors from 'cors';
// // import authRroutes from './routes/auth.js';
// // import connectToDatabase from './db/db.js';

// // connectToDatabase();
// // const app = express()

// // app.use(cors())
// // app.use(express.json()) 
// // app.use('/api/auth', authRroutes)

// // app.listen (process.env.PORT, () => {
// //     console.log(`Server running on port ${process.env.PORT}`);
// // })   


// // ...existing code...
// import express from 'express';
// import cors from 'cors';
// import authRouter from './routes/auth.js';
// import connectToDatabase from './db/db.js';



// connectToDatabase();
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', authRouter);


//   const PORT = process.env.PORT || 3000;
//   app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
//   });



// ...existing code...
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import connectToDatabase from './db/db.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const start = async () => {
  await connectToDatabase(); // wait for DB
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start();
// ...existing code...