import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

// eslint-disable-next-line import/prefer-default-export
export { createSpecificationController };
