import userModel from '../../models/User.js';

export const me = async(req, res) => {
    try {
        const user = await userModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }

        const {passwordHash,createdAt,updatedAt,__v, ... userData} = user._doc;

        res.json(userData);
    }catch (err){
        console.log(err);
        res.status(500).json({
            massage: "Нет доступа",
         });
    }
}