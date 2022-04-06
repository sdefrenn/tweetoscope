import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitterStrategy } from './twitter.strategy';
import { ConfigModule } from '@nestjs/config';
import { TscpModule } from './tscp/tscp.module';
import { TwitterController } from './twitter.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TscpModule,
  ],
  controllers: [AppController, TwitterController],
  providers: [AppService, TwitterStrategy],
})
export class AppModule {}
