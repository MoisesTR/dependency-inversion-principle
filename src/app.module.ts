import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OctokitModule } from 'nestjs-octokit';
import { RepositoryStatisticsModule } from './modules/repository-statistics/repository-statistics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OctokitModule.forRootAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: async(configService: ConfigService) => ({
        octokitOptions: {
          auth: configService.get<string>('GITHUB_TOKEN')
        }
      })
    }),
    RepositoryStatisticsModule.register()
  ],
})
export class AppModule {}
