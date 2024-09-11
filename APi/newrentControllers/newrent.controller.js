import { NewRent } from "../models/newrent.js";
import { RentReq } from "../models/rentreq.js";
import { Flat } from "../models/flat.js";
const rentNew = async (req, res) => {
  try {
    console.log(req.body);

    const rntnw = await NewRent.create(req.body);

    res.status(200).json(rntnw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const ReqRent = async (req, res) => {
  try {
    
    const temp = await Flat.find({ flat: req.body.flat });
    if (temp.length == 0 || temp[0].status == true){
      throw new Error("Flat not found or already booked");
    }
    
    const temp2 = await RentReq.find({ owner: req.body.owner,flat:req.body.flat,phone:req.body.phone });
    if (temp2.length > 0){
      throw new Error("This flat Already requested for booking by you");
    }
    const rqrnt = await RentReq.create(req.body);

    res.status(200).json(rqrnt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { rentNew, ReqRent };
