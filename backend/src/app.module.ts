import { Module } from '@nestjs/common';
import ormconfig from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controller/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
