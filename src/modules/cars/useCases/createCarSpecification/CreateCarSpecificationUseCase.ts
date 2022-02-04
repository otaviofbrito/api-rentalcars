/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ISpecifcationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecifcationsRepository,
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);
    if (!carExists) {
      throw new AppError('Car does not exists!');
    }

    const specification = await this.specificationsRepository.findByIds(
      specifications_id,
    );

    carExists.specifications = specification;

    await this.carsRepository.create(carExists);
  }
}

export { CreateCarSpecificationUseCase };
