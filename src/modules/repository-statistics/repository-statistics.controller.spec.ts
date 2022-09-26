import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryStatisticsController } from './repository-statistics.controller';

describe('RepositoryStatisticsController', () => {
  let controller: RepositoryStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoryStatisticsController],
    }).compile();

    controller = module.get<RepositoryStatisticsController>(RepositoryStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
