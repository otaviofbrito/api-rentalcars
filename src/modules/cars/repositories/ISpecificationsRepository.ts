import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecifcationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

// eslint-disable-next-line import/prefer-default-export
export { ISpecifcationsRepository, ICreateSpecificationDTO };
