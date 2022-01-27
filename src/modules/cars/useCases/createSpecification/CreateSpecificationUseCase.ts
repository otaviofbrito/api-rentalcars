/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ISpecifcationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specifcationsRepository: ISpecifcationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specAlreadyExists = await this.specifcationsRepository.findByName(
      name,
    );

    if (specAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    await this.specifcationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
