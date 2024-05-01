import { validationResult } from 'express-validator';
import userModel from '../../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const registration =  async(req,res) => { 
    try {
    const check_user = await userModel.findOne({ login: req.body.login});
    if(check_user){
        return res.json({
            message: 'Пользователь c таким логином уже существует',
        });
    }
     const password = req.body.password;
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(password,salt);
     const doc = new userModel({
         email: req.body.email,
         FIO: req.body.FIO,
         login: req.body.login,
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
     
     const {passwordHash,createdAt,updatedAt,__v,email, ... userData} = user._doc;

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

