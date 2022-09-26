import { DynamicModule, Module, ModuleMetadata } from "@nestjs/common";
import { GithubInfrastructureModule } from "../github/github-infraestructure.module";
import { RepositoryStatisticsController } from "./repository-statistics.controller";

@Module({
  controllers: [RepositoryStatisticsController],
})
export class RepositoryStatisticsModule {
  static register(): DynamicModule {
    const infrastructure: ModuleMetadata['imports'] =
      process.env.PROVIDER === 'GITHUB'
        ? [GithubInfrastructureModule]
        : [];
    return {
      module: RepositoryStatisticsModule,
      imports: [...infrastructure],
    };
  }
}