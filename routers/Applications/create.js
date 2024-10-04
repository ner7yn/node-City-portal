import ApplicationModel from "../../models/Application.js";

export const create = async(req,res) => {
    try{
            const doc = new ApplicationModel({
                title: req.body.title,
                text:req.body.text,
                teg:req.body.tegId,
                user:req.userId,
                status:req.status,
                imageUrlBefore:req.body.imageUrlBefore,
                imageUrlAfter:req.imageUrlAfter
            })

            const post = await doc.save();

            res.json(post);
    }catch (err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось создать статью",
         });
    }
}