import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecifcationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

// eslint-disable-next-line import/prefer-default-export
export { ISpecifcationsRepository, ICreateSpecificationDTO };
