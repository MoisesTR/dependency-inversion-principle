import { PullRequest } from "src/interfaces/pull-request";
import { GitHubPullRequestType } from "src/types/github";

export class GithubPullRequestMapper {
    static toModel(data: GitHubPullRequestType): PullRequest {
        return {
            url: data.url,
            title: data.title,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            draft: data.draft,
            labels: data.labels.map( label => label.name)
        };
    }
}