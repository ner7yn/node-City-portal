import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';


const swaggerSpec = {
    openapi: '3.0.0',
    info: {
      title: 'Мое API',
      version: '1.0.0',
      description: 'Описание API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  apis: ['./index.js'], // Путь к файлам, содержащим ваши маршруты
};

export default swaggerSpec;