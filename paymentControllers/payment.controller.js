import { Payment } from "../models/payment.js";

const paymentNew = async (req, res) => {
  try {
    console.log(req.body);
    
    const pymntnw = await Payment.create(req.body);

    res.status(200).json(pymntnw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




export {paymentNew};
