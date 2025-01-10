import { Test, TestingModule } from '@nestjs/testing';
import { ExtratoSicoobController } from './extrato-sicoob.controller';
import { ExtratoSicoobService } from './extrato-sicoob.service';

describe('ExtratoSicoobController', () => {
  let controller: ExtratoSicoobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtratoSicoobController],
      providers: [ExtratoSicoobService],
    }).compile();

    controller = module.get<ExtratoSicoobController>(ExtratoSicoobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
