import { Controller, Get, Param } from '@nestjs/common';
import { PullRequest } from 'src/interfaces/pull-request';
import { RepositoryDataFetcher } from 'src/interfaces/repository-data-fetcher';

@Controller('repository-statistics')
export class RepositoryStatisticsController {
    constructor(private repositoryDataFetcher: RepositoryDataFetcher) {}

    @Get('repository/:repositoryId/reviewer/:reviewerId/pending-prs')
    getReviewerPendingPrs(
        @Param('repositoryId') repositoryId: string,
        @Param('reviewerId') reviewerId: string
    ): Promise<PullRequest[]> {
        return this.repositoryDataFetcher.getReviewerPendingPrs(repositoryId, reviewerId);
    }
}
