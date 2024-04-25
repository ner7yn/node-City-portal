import { body } from "express-validator";

function isAllowedTag(value) {
    return allowedTags.includes(value);
  }

export const applicationValidation = [
    body('title','Введите заголовок заявки').isLength({min:5}).isString(),
    body('text', 'Введите описание заявки').isLength({min:20}).isString(),
    body('teg', 'Такого тега нету').optional.custom(isAllowedTag),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];