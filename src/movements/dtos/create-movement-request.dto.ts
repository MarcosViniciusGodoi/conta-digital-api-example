import { MovementTypeEnum } from '../enums/movement-type.enum';

export class CreateMovementRequestDTO {
  accountNumber: string;
  type: MovementTypeEnum;
  amount: number;
}
