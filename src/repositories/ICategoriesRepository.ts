import { Category } from "../model/Category";

interface ICategoryRepsotoryDTO {
    name: string;
    description: string;
};

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICategoryRepsotoryDTO): void;
}

export { ICategoriesRepository, ICategoryRepsotoryDTO }