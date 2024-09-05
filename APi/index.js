import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
const router = express.Router();
const app = express()
const port = 3000

import flatRoute from './routes/flat.route.js'
import rentNewRoute from './routes/newrent.route.js'
import paymentRoute from './routes/payment.route.js'
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/newrent',rentNewRoute)
app.use('/api/payment',paymentRoute)
app.use('/api/flat',flatRoute)


// app.use('/api/signup',signuproute)
// app.use('/api/msg',msgroute)
// app.use('/api/frnd',frndroute)


await mongoose.connect('mongodb://127.0.0.1:28017/AkashiVilla')
.then(()=>{
  console.log("connected");
  app.listen(port, () => {
    console.log(`server  listening on port ${port}`)
  })
  
})
.catch(()=>{
  console.log("not connected");
})