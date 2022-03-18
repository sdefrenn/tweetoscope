import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('twitter')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('twitter'))
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('redirect')
  @UseGuards(AuthGuard('twitter'))
  yo(@Req() req: Request): string {
    //modify and use receiveToken, put in a cookie, send some BS with it
    return this.appService.receiveTokens(req);
  }
}
