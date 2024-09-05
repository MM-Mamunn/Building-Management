import mongoose from "mongoose";

const FlatSchema = new mongoose.Schema(
  {
    // idd: { type: String, required: true },
    flat:{type:String,required:true,unique:true},
    bed:{type:Number,required:true,min:1},
    masterbed:{type:Number,required:true},
    bath:{type:Number,required:true},
    attachedbath:{type:Number,required:true},
    dining:{type:Number,required:true},
    drawing:{type:Number,required:true},
    area:{type:Number,required:true},
    status:{type:Boolean,default:false}
  },
  {
    timestamps: true,
  }
);

export const Flat = mongoose.model("Flat", FlatSchema);