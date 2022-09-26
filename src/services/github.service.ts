import { Injectable, NotFoundException } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { PullRequest } from 'src/interfaces/pull-request';
import { RepositoryDataFetcher } from 'src/interfaces/repository-data-fetcher';
import { GithubPullRequestMapper } from 'src/mappers/github-pull-request-mapper';

@Injectable()
export class GithubService implements RepositoryDataFetcher {
  constructor(private octokitService: OctokitService) { }

  async getReviewerPendingPrs(repositoryId: string, reviewerId: string): Promise<PullRequest[]> {
    try {
      const { data } = await this.octokitService.rest.pulls.list({
        owner: "MoisesTR",
        repo: repositoryId
      });

      const pendingPrs = data.filter(
        pull => pull.requested_reviewers.some(reviewer => reviewer.login === reviewerId)
      ).map(GithubPullRequestMapper.toModel);


      return pendingPrs;
    } catch (err) {
      throw new NotFoundException(`Repository with id ${repositoryId} not found`);
    }
  }
}
