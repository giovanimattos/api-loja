import { Test, TestingModule } from '@nestjs/testing';
import { ExtratoSicoobService } from './extrato-sicoob.service';

describe('ExtratoSicoobService', () => {
  let service: ExtratoSicoobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtratoSicoobService],
    }).compile();

    service = module.get<ExtratoSicoobService>(ExtratoSicoobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
