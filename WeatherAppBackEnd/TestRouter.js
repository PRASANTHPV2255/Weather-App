const { Router } = require('express')
const express=require('express')
const {UsersSignUP, Loginuser} = require('./UserController')

const router=express.Router()

router.route('/signup').post(UsersSignUP)
router.route('/login').post(Loginuser)


module.exports=router