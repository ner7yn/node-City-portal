import express from 'express';
import mongoose from 'mongoose';
import { loginValidation, registerValidation } from './validations/auth.js';
import { registration } from './methods/User/register.js';
import { login } from './methods/User/login.js';
import checkAuth from './utils/checkAuth.js';
import userModel from './models/User.js';
import { me } from './methods/User/getMe.js';

mongoose
.connect('mongodb+srv://admin:admin@cluster0.yya2lqn.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {console.log('DB good')})
.catch((err) => {console.log('DB error',err)});

 
const app = express();
app.use(express.json())

app.post('/auth/login',loginValidation, login)

app.post('/auth/register', registerValidation , registration);

app.get('/auth/me',checkAuth, me)

app.listen(5000,(err)=>{
    if(err){
        return console.log(err);
    }
    return console.log("Server good");
})