import ApplicationModel from "../../models/Application.js";

export const getMeAll = async (req, res) => {
    try {
        const userId = req.userId;
        // Находим заявки только текущего пользователя и популируем данные категории
        const applications = await ApplicationModel.find({ user: userId })
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
