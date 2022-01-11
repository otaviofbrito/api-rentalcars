/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { ListCategoriesController };
