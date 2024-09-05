import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    // idd: { type: String, required: true },
    flat:{type:String,required:true},
    recipient: { type: String, required: true, minlength: 5 },
    month: { type: String, required: true , minlength: 3},
    year: { type: Number, required: true , min: 5},
    date:{type: Date,required:true}
  },
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model("Payment", PaymentSchema);