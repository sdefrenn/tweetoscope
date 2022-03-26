import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import getTweet from './twitter_api_calls/getTweet';
import getUserTweets from './twitter_api_calls/getUserTimeline'

@Controller('twitter')
export class TwitterController {
  constructor(private readonly appService: AppService) {}

  @Get('tweet')
  searchTweet(@Req() req: Request): any {
    return getTweet(req.body.id);
  }

  @Get('userTimeline')
  searchUserTimeline(@Req() req: Request): any {
    return getUserTweets(req.body.id);
  }

}