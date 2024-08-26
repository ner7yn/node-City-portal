import ApplicationModel from "../../models/Application.js";

export const getAll = async (req, res) => {
    try {
        // Популяция данных по пользователю и категории
        const applications = await ApplicationModel.find()
            .populate('user')  // Получаем данные пользователя
            .populate('teg', 'name')  // Получаем только имя категории
            .exec();

        res.json(applications);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить статьи",
        });
    }
};
