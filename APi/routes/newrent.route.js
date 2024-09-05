import express from 'express';
const router = express.Router();

import { rentNew } from '../newrentControllers/newrent.controller.js';
router.post('/new',rentNew);

// router.post('/new',signupNew);
// router.post('/usercheck/',userCheck);
// router.post('/login',login);
// router.get('/all',signAll);

// router.get('/view/:id',viewSingleTask);

// router.post('/insert',insertTask);

// router.put('/update/:id',updateTask);

// router.delete('/delete/:id',deleteTask);

export default router;