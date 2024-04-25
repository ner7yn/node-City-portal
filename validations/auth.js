import { body } from "express-validator";
function isLatin(value) {
    return /^[A-Za-z]*$/.test(value);
  }

function isCyrillic(value) {
    return /^[А-Яа-я\s-]*$/.test(value);
}


export const registerValidation = [
    body('login','Неверный формат логина').custom(isLatin),
    body('email','Неверный формат почты').isEmail(),
    body('password', 'Пароль должен содержать минимум 6 символов и не более 20').isLength({min:6,max:20}),
    body('FIO', 'Укажите корректное ФИО').custom(isCyrillic),
];

export const loginValidation = [
    body('login','Неверный формат почты').isEmail(),
    body('password', 'Пароль должен содержать минимум 6 символов и не более 20').isLength({min:6,max:20}),
];