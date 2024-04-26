import ApplicationModel from "../../models/Application.js";

export const getAll = async(req,res) =>{
    try{
            const applications = await ApplicationModel.find().populate('user').exec();

            res.json(applications);
    }catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось получить статьи",
         });
    }
}