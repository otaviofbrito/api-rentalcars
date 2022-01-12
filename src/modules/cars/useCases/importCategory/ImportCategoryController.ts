/* eslint-disable no-useless-constructor */
/* eslint-disable no-console */
import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { ImportCategoryController };
