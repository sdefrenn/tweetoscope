import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterStrategy } from './twitter.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TwitterStrategy],
})
export class AppModule {}
