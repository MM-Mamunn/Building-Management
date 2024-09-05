import mongoose from "mongoose";

const NewRentSchema = new mongoose.Schema(
  {
    // idd: { type: String, required: true },
    owner: { type: String, required: true, minlength: 5 },
    phone: { type: String, required: true , minlength: 5},
    members: { type: Number, required: true,min: 1  },
    issue:{type: Date,default:"2000-10-12"},
    flat:{type:String,required:true, unique: true}
  },
  {
    timestamps: true,
  }
);

export const NewRent = mongoose.model("NewRent", NewRentSchema);