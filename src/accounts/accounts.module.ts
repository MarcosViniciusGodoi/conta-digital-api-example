import { Module } from '@nestjs/common';

import { DbModule } from 'src/db-module/db-module.module';
import { AccountSchema } from './account.schema';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [DbModule.forFeature('Account', AccountSchema)],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
