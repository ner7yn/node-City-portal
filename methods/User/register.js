import { validationResult } from 'express-validator';
import userModel from '../../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const registration =  async(req,res) => { 
    try {
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json(errors.array());
     }
 
 
     const password = req.body.password;
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(password,salt);
     
     const doc = new userModel({
         email: req.body.email,
         fullName: req.body.fullName,
         avatarURL: req.body.avatarURL,
         passwordHash:hash,
     });
 
 
     const user = await doc.save();
     
     const token = jwt.sign({
         _id: user._id,
     }, 'secretZXC',
     {
         expiresIn:'3d',
     }
     );
     
     const {passwordHash, ... userData} = user._doc;

     res.json({
         ...userData,
         token,
     });
    }catch(err){
         console.log(err);
         res.status(500).json({
             massage: "Не удалось зарегестрироваться",
          });
    } 
 
 }

