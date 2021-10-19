import { Body, Controller } from '@nestjs/common';

import { CreateMovementRequestDTO } from './dtos/create-movement-request.dto';
import { MovementResponseDTO } from './dtos/movement-response.dto';
import { MovementsService } from './movements.service';

@Controller('/movements')
export class MovementsController {
  constructor(private readonly movementService: MovementsService) {}

  public async store(
    @Body() body: CreateMovementRequestDTO,
  ): Promise<MovementResponseDTO> {
    return await this.movementService.store(body);
  }
}
