import { HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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
      if (err.status === 401) {
        throw new UnauthorizedException("Wrong Github credentials");
      }

      if (err.status === 404) {
        throw new NotFoundException(`Repository with id ${repositoryId} not found`);
      }

      throw new HttpException("Something unexpected happened during the request", 400);
    }
  }
}
