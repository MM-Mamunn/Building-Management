import express from 'express';
const router = express.Router();

import { flatNew,flatAll,flatOne } from '../flatControllers/flat.controller.js';
router.post('/new',flatNew);
router.get('/all',flatAll);
router.get('/one/:flat',flatOne);

// router.post('/new',signupNew);
// router.post('/usercheck/',userCheck);
// router.post('/login',login);
// router.get('/all',signAll);

// router.get('/view/:id',viewSingleTask);

// router.post('/insert',insertTask);

// router.put('/update/:id',updateTask);

// router.delete('/delete/:id',deleteTask);

export default router;