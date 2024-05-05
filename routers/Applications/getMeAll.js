import ApplicationModel from "../../models/Application.js";

export const getMeAll = async(req,res) =>{
    try{
        const userId = req.userId;
        const applications = await ApplicationModel.find({ user: userId }).exec();
            res.json(applications);
    }catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось получить статьи",
         });
    }
}