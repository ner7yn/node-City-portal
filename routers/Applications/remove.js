import ApplicationModel from "../../models/Application.js";

export const remove = async(req,res) =>{
    try{
            const applicationId = req.params.id;

            const deletedApplication = await ApplicationModel.findOneAndDelete({ _id: applicationId });

        if (!deletedApplication) {
            return res.status(404).json({
                message: 'Запись не найдена'
            });
        }

        res.json({
            success: true,
            message: 'Запись успешно удалена',
            deletedApplication
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            massage: "Не удалось удалить статью",
         });
    }
}