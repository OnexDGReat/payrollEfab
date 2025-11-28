
// import express from 'express';
// const router = express.Router();
// import { login,verify } from '../controllers/authControllers.js';
// import  authMiddleware  from '../middleware/authMiddleware.js';


// router.post('/login', login);
// router.get('/verify', authMiddleware, verify); 


// export default router;


import express from 'express';
import { login, verify } from '../controllers/authControllers.js'; // .js required
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);        
router.get('/verify', requireAuth, verify);

export default router;