import { Module } from '@nestjs/common';

import { MovementsModule } from './movements/movements.module';
import { AccountsModule } from './accounts/accounts.module';
import { DbModule } from './db-module/db-module.module';

@Module({
  imports: [DbModule.forRoot(), MovementsModule, AccountsModule],
})
export class AppModule {}
