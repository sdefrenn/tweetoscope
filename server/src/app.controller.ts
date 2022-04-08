import { Controller, Get, Req, Res, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, response } from 'express';
import { AppService } from './app.service';
import * as fs from 'fs';

import { Console } from "console";

const myLogger = new Console({
  stdout: fs.createWriteStream("normalStdout.txt"),
  stderr: fs.createWriteStream("errStdErr.txt"),
});


@Controller('twitter')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   *
   * direct to twitter login page and ask the user if he allows twitter to give credit to twittoscope
   * triggered by @useguard
   */
  @Get()
  @UseGuards(AuthGuard('twitter'))
  getHello(): string {
    console.log("Start Token Reception");
    return 'Hello World!';
  }

  /**
   * redirect from twitter with token if Login did not failed
   * req should contain token and refresh token
   */

  @Get('redirect')
  @UseGuards(AuthGuard('twitter'))
  sendTokenClient(@Req() req: Request, @Res() response: Response): string {
    
    console.log("Start Token Reception");

    const tokens = this.appService.receiveTokens(req, response);
    //myLogger.log(tokens);
    console.log(tokens.req.user);
    console.log("Token Received");
    return tokens.req.user;
  }
}
