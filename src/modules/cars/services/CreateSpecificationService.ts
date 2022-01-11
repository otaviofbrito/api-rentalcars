/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import { ISpecifcationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  // eslint-disable-next-line prettier/prettier
  constructor(private specifcationsRepository: ISpecifcationsRepository) { }

  execute({ name, description }: IRequest): void {
    const specAlreadyExists = this.specifcationsRepository.findByName(name);

    if (specAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specifcationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
