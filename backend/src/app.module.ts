import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controller/user/user.module';
import { GroupModule } from './controller/group/group.module';
import { AuthModule } from './controller/auth/auth.module';

@Module({
  imports: [UserModule, GroupModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
