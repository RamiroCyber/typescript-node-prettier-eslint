import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.post('/courses', (request, response) => {
    const { name } = request.body;
    response.json({ name });
})

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
})


app.listen(4000, () => console.log('Server is running'));