import { MovementTypeEnum } from './enums/movement-type.enum';

export interface IMovement {
  _id: string;
  type: MovementTypeEnum;
  amount: number;
  currentBalance: number;
}
