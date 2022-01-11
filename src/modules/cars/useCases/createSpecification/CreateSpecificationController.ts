/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CreateSpecificationController };
