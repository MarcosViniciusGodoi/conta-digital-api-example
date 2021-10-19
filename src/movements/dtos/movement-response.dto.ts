import { MovementTypeEnum } from '../enums/movement-type.enum';

export class MovementResponseDTO {
  _id: string;
  type: MovementTypeEnum;
  amount: number;
  currentBalance: number;
}
