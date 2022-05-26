import { Router } from 'express';
import { CreateCategoryService } from '../../services/CreateCategoryService';
import { MysqlCategoriesRepository } from '../repositories/MysqlCategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new MysqlCategoriesRepository;

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({ name, description })

    return response.status(201).send();

});

categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.json(allCategories);
});

export { categoriesRoutes };