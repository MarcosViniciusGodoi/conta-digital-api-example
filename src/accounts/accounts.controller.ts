import { Body, Controller, Post } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { AccountResponseDTO } from './dtos/account-response.dto';
import { CreateAccountRequestDTO } from './dtos/creeate-account-request.dto';

@Controller('/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  public async store(
    @Body() body: CreateAccountRequestDTO,
  ): Promise<AccountResponseDTO> {
    return await this.accountsService.store(body);
  }
}
