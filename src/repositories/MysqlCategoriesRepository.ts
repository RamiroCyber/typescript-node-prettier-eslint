import { Category } from "../model/Category";
import { ICategoriesRepository, ICategoryRepsotoryDTO } from "./ICategoriesRepository";


class MysqlCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        return null;
    }
    list(): Category[] {

        return null;
    }
    create({ name, description }: ICategoryRepsotoryDTO): void {

    }

}

export { MysqlCategoriesRepository }