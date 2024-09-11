import express from 'express';
const router = express.Router();

import { rentNew , ReqRent} from '../newrentControllers/newrent.controller.js';
router.post('/new',rentNew);
router.post('/book',ReqRent);

// router.post('/new',signupNew);
// router.post('/usercheck/',userCheck);
// router.post('/login',login);
// router.get('/all',signAll);

// router.get('/view/:id',viewSingleTask);

// router.post('/insert',insertTask);

// router.put('/update/:id',updateTask);

// router.delete('/delete/:id',deleteTask);

export default router;