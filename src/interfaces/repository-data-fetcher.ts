import { PullRequest } from './pull-request';

export abstract class RepositoryDataFetcher {
  abstract getReviewerPendingPrs(repositoryId: string, reviewerId: string): Promise<PullRequest[]>;
}