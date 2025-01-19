const mongoose= require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const userSchema=new Schema({
  email:{type:String,unique:true},
  password: String,
  firstName:String,
  lastName: String
});

const userModel= mongoose.model("user",userSchema);

module.exports={
  userModel,
}
