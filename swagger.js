import swaggerAutogen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:5000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Путь к вашему основному файлу приложения

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import('./index.js'); // Ваш основной файл приложения, который требуется импортировать
});