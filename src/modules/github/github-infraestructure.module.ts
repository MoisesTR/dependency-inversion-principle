import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RepositoryDataFetcher } from 'src/interfaces/repository-data-fetcher';
import { GithubService } from 'src/services/github.service';

@Module({
  imports: [HttpModule],
  providers: [
    GithubService,
    { provide: RepositoryDataFetcher, useExisting: GithubService }
  ],
  exports: [RepositoryDataFetcher]
})
export class GithubInfrastructureModule {}