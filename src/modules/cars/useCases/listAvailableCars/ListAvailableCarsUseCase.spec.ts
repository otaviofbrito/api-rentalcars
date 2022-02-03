import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('Should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'CAR1',
      description: 'CARDESC',
      daily_rate: 100,
      license_plate: 'ABC-2321',
      fine_amount: 60,
      brand: 'CARBRAND',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'CAR31',
      description: 'CARDESC',
      daily_rate: 100,
      license_plate: 'ABC-3431',
      fine_amount: 60,
      brand: 'CARBRANDTEST',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'CARBRANDTEST',
    });

    expect(cars).toEqual([car]);
  });
  it('Should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'CARNAMETEST',
      description: 'CARDESC',
      daily_rate: 100,
      license_plate: 'ABC-3431',
      fine_amount: 60,
      brand: 'BRAND',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'CARNAMETEST',
    });

    expect(cars).toEqual([car]);
  });
  it('Should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'CAR31',
      description: 'CARDESC',
      daily_rate: 100,
      license_plate: 'ABC-3431',
      fine_amount: 60,
      brand: 'BRAND',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
