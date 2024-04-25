import { validationResult } from 'express-validator';
import userModel from '../../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try{
        const user = await userModel.findOne({ email: req.body.email});

        if(!user){
            return res.status(404).json({
                message: 'Пользователь не найден',
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if(!isValidPass){
            return res.status(400).json({
                message: 'Неверный логин или пароль',
            });
        }
        
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

    } catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось авторизоваться",
         });
    }
}