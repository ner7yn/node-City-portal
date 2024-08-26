import CategoryModal from "../../models/Category.js";
import ApplicationModel from "../../models/Application.js";

export const removeCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;

        // Удаляем категорию
        const deletedCategory = await CategoryModal.findOneAndDelete({ _id: categoryId });

        if (!deletedCategory) {
            return res.status(404).json({
                message: 'Категория не найдена',
            });
        }
        await ApplicationModel.deleteMany({ teg: categoryId });

        res.json({
            success: true,
            message: 'Категория и связанные заявки успешно удалены',
            deletedCategory,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось удалить категорию",
        });
    }
};
