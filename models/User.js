import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    FIO:{
        type:String,
        required:true,
    },
    login:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    passwordHash:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
})

export default mongoose.model('User',UserSchema);