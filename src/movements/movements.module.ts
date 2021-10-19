import { Module } from '@nestjs/common';

import { DbModule } from 'src/db-module/db-module.module';
import { MovementSchema } from './movement.schema';
import { MovementsController } from './movements.controller';
import { MovementsService } from './movements.service';

@Module({
  imports: [DbModule.forFeature('Movement', MovementSchema)],
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}
