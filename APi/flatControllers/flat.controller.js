import { Flat } from "../models/flat.js";
const flatNew = async (req, res) => {
  try {
    console.log(req.body);
    
    const flatnw = await Flat.create(req.body);

    res.status(200).json(flatnw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const flatAll = async (req, res) => {
    try {
      const all = await Flat.find({});
      all.sort((a, b) => new Date(a.flat) - new Date(b.flat));
      res.status(200).json(all);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const flatOne= async (req, res) => {
    try {
      const { flat } = req.params;
      const all = await Flat.find({flat});
      res.status(200).json(all);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


export {flatNew , flatAll,flatOne};
