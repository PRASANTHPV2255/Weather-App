const newUser = require("./User")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const UsersSignUP = async(req,res)=>{
  const {Name,Email,Password}=req.body

  const signUp=await newUser.findOne({Email})

  if(!Name || !Email || !Password){
    return res.json({msg:'Fill all the fields'})
  }
  if(Password.length < 8) {
    return res.json({msg:'Password must need at least 8 character'})
   }
   if(signUp){
    return res.json({msg:'Email already exist'})
   }
   else{
     const salt=await bcrypt.genSalt(10)
     const hashedpassword = await bcrypt.hash(Password,salt)
     console.log(hashedpassword);
  
     const Userdetails = await newUser.create({
         Name,
         Email,
         Password:hashedpassword
     })
     Token=gentoken(Userdetails._id)
    console.log({Userdetails});
    res.json({msg:'register successful',Userdetails,Token:Token})
    
   }
  }

  const Loginuser=async(req,res)=>{
    const{Email,Password}=req.body

    const finduser=await newUser.findOne({Email}) 


    if ( finduser && bcrypt.compareSync(Password,finduser.Password)){
        res.json({msg:'Logined success',Token:gentoken(finduser._id),finduser})
     console.log({msg:'Login success'})
    } 
   else {
        res.json({msg:'Email and password not correct'})
        console.log('Email and password not correct'); 
    }
}
  
  
     const gentoken=(id)=>{
      return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'}); 

   
}

module.exports={UsersSignUP,Loginuser}