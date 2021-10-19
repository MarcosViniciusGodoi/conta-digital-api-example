import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IAccount } from './account.interface';
import { AccountResponseDTO } from './dtos/account-response.dto';
import { CreateAccountRequestDTO } from './dtos/creeate-account-request.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel('Account')
    private readonly accountModel: Model<IAccount>,
  ) {}

  public async store(
    data: CreateAccountRequestDTO,
  ): Promise<AccountResponseDTO> {
    return await new this.accountModel(data).save();
  }
}
