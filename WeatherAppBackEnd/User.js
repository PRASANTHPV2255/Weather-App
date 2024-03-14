const { default: mongoose } = require("mongoose");


const userSchema=mongoose.Schema({
  Name:{type:String},
  Email:{type:String},
  Password:{type:String}
})

const newUser=mongoose.model('WeaterAppUser',userSchema);

module.exports=newUser;