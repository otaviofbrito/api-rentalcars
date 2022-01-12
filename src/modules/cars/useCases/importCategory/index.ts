import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepositories = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositories);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

// eslint-disable-next-line import/prefer-default-export
export { importCategoryController };
