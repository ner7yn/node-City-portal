import CategoryModal from "../../models/Category.js";

// const canUserCreateCategory = (userid) => {
//     return userid === '663dc7a5e745d011712285cd';
// };

export const createCategory = async(req,res)=>{
    try{
        // const userid = req.body.id;
        // console.log(userid)
        // if (!canUserCreateCategory(userid)) {
        //     return res.status(403).json({
        //         message: "У вас нет прав на создание категории",
        //     });
        // }

        const doc = new CategoryModal({
            name: req.body.name,
        })

        const post = await doc.save();

        res.json(post);
    }catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось создать категорию",
         });
    }
}