import { NewRent } from '../models/newrent.js';

const rentNew = async (req, res) => {
  try {
    console.log(req.body);
    
    const rntnw = await NewRent.create(req.body);

    res.status(200).json(rntnw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




export {rentNew};
