import {
  HttpException,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from '../ormconfig';
import { UserModule } from './controller/user/user.module';
import { MissionModule } from './controller/mission/mission.module';
import { GroupModule } from './controller/group/group.module';
import { ActivityModule } from './controller/activeity/activity.module';
import { RankModule } from './controller/rank/rank.module';

@Module({
  imports: [
    UserModule,
    MissionModule,
    GroupModule,
    TypeOrmModule.forFeature([]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig),
    GroupModule,
    ActivityModule,
    RankModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
