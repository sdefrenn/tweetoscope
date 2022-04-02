import { Controller, Get, Req, Res, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   *
   * direct to twitter login page and ask the user if he allows twitter to give credit to twittoscope
   * triggered by @useguard
   */
  @Get('login')
  @UseGuards(AuthGuard('twitter'))

  /**
   * redirect from twitter with token if Login did not failed
   * req should contain token and refresh token
   */
  @Get('twitter/redirect')
  @UseGuards(AuthGuard('twitter'))
  sendTokenClient(@Req() req: Request, @Res() response: Response): string {
    return this.appService.receiveTokens(req, response);
  }

  /**
   * home route where we should see basic tweet and search bar
   * @returns
   */
  @Get('home')
  homePage() {
    return this.appService.homePage();
  }

  /**
   * editor route will be the route where user can edit a tweet
   */
  @Get('editor')
  writeTweet(): string {
    return this.appService.writeTweet();
  }
}
