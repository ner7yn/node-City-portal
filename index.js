import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert { type: 'json' };
import mongoose from 'mongoose';
import { loginValidation, registerValidation, applicationValidation } from './validations.js';
import { registration, getAll, getOne, remove, update, create, me, login, uploads, getMeAll, createCategory, removeCategory } from './routers/routers.js';
import { upload, handleValidationErrors, checkAuth } from './utils/utils.js';
import cors from 'cors';
import { getAllCategory } from './routers/Category/getAll.js';

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.yya2lqn.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => { console.log('DB good') })
    .catch((err) => { console.log('DB error', err) });


const app = express();

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/uploads', express.static('uploads'));

app.post('/upload', checkAuth, upload.any(), uploads);

app.post('/auth/login', loginValidation, handleValidationErrors, login);

app.post('/auth/register', registerValidation, handleValidationErrors, registration);

app.get('/auth/me', checkAuth, me);

app.get('/applications', getAll);

app.get('/MyApplications', checkAuth, getMeAll)

app.get('/applications/:id', getOne);

app.post('/applications', checkAuth, applicationValidation, handleValidationErrors, create);

app.delete('/applications/:id', checkAuth, remove);

app.patch('/applications/:id', checkAuth, applicationValidation, handleValidationErrors, update);

app.post('/category', checkAuth, handleValidationErrors, createCategory);

app.get('/category',getAllCategory);

app.delete('/category/:id', checkAuth, removeCategory);

app.listen(5000, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log("Server good");
})


