import ApplicationModel from "../../models/Application.js";

export const getOne = async(req,res) =>{
    try{
            const applicationId = req.params.id;
            const one  = await ApplicationModel.findOne({_id:applicationId});

            res.json(one);
    }catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось получить статью",
         });
    }
}