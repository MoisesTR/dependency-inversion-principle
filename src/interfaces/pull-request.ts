export interface PullRequest {
    url: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    draft: boolean;
    labels: string[];
}
