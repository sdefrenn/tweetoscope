import { Controller, Get, Req, Res, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, response } from 'express';
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
  yo(@Req() req: Request, @Res() response: Response): string {
    //modify and use receiveToken, put in a cookie, send some BS with it
    return this.appService.receiveTokens(req, response);
  }
}
