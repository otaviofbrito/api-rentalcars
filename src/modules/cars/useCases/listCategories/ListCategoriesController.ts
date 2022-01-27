/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { ListCategoriesController };
