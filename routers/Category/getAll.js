import CategoryModal from "../../models/Category.js";

export const getAllCategory = async (req, res) => {
    try {
        const categoryAll = await CategoryModal.find().exec();

        // Проходим по каждой категории и удаляем ненужные поля
        const categories = categoryAll.map(category => {
            const { createdAt, updatedAt, __v, ...rest } = category._doc;
            return rest;
        });

        res.json(categories);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить категории",
        });
    }
}