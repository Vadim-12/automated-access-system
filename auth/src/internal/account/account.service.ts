import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { VerificationParams } from './account.types';

export class InternalAccountService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async verification(params: VerificationParams): Promise<boolean> {
    const url = `${this.config.get('ACCOUNT_URL')}/v1/user/verification`;
    const res = await this.httpService.axiosRef.get(url, { params });
    return res.data;
  }
}
