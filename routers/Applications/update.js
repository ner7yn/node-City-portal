import ApplicationModel from "../../models/Application.js";

export const update = async(req,res) =>{
    try{
        const applicationId = req.params.id;
        await ApplicationModel.updateOne({
            _id:applicationId,
        },
        {
            title: req.body.title,
            text:req.body.text,
            teg:req.body.teg,
            status:req.body.status,
            imageUrlBefore:req.body.imageUrlBefore,
            imageUrlAfter:req.body.imageUrlAfter,
        })
        res.json({
            success:true,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось обновить статью",
         });
    }
}