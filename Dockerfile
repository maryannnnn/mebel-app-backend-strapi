# Используем Node 20, как указано в package.json
FROM node:20

# Установка рабочей директории
WORKDIR /app

# Копируем только package.json и lock для кэширования зависимостей
COPY package*.json ./

# Установка зависимостей с флагом, который обходит несовместимости
RUN npm install --legacy-peer-deps

# Копируем весь проект
COPY . .

# Сборка проекта
RUN npm run build

# Открываем порт Strapi
EXPOSE 1337

# Запуск
CMD ["npm", "run", "start"]
