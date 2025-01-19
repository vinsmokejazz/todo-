const mongoose= require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const userSchema=new Schema({
  email:{type:String,unique:true},
  password: String,
  firstName:String,
  lastName: String
});

const todoSchema=new Schema({
  title: String,
  done: String,
  userId: ObjectId,
  
});

const userModel= mongoose.model("user",userSchema);
const todoModel= mongoose.model("todo", todoSchema);

module.exports={
  userModel,
  todoModel
}
