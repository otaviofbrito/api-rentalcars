import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

// eslint-disable-next-line import/prefer-default-export
export { specificationRoutes };
