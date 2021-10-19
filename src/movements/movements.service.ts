import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovementRequestDTO } from './dtos/create-movement-request.dto';
import { MovementResponseDTO } from './dtos/movement-response.dto';
import { IMovement } from './movement.interface';

@Injectable()
export class MovementsService {
  constructor(
    @InjectModel('Movement')
    private readonly movementModel: Model<IMovement>,
  ) {}

  public async store(
    data: CreateMovementRequestDTO,
  ): Promise<MovementResponseDTO> {
    return await new this.movementModel(data).save();
  }
}
