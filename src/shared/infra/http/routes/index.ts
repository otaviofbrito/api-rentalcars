import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { carRoutes } from './cars.routes';
import { rentalRoutes } from './rental.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);

router.use('/users', usersRoutes);
router.use('/cars', carRoutes);

router.use('/rentals', rentalRoutes);

router.use(authenticateRoutes);

// eslint-disable-next-line import/prefer-default-export
export { router };
