# Используем официальный образ Node.js в качестве базового
FROM node:18

# Создаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (если они есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальную часть кода
COPY . .

# Запускаем приложение
CMD [ "npm", "run", "ura" ]