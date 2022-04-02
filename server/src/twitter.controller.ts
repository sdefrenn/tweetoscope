import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import getTweet from './twitter_api_calls/getTweet';
import getUserTweets from './twitter_api_calls/getUserTimeline'
import getUserTimeline from './twitter_api_calls/getUserTimeline';

@Controller('twitter')
export class TwitterController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTwitter(): any{
    return "Twitter"
  }

  @Get('secondTest')
  getSecondTest(): any{
    return "Hello Twitter"
  }

  @Post('getTweet')
  async searchTweet(@Req() req: Request): Promise<any> {

    try {
          const response = await getTweet(req.body.id);

          console.log("Route Request");
          console.dir(response, {
              depth: null
          });
          console.log("Route Request End");
          return response;
          

    } catch (e) {
          console.log(e);
          process.exit(-1);
      }
    }; 
    

  @Post('userTimeline')
  async searchUserTimeline(@Req() req: Request): Promise<any> {

    try {
          const response = await getUserTimeline(req.body.id);

          console.log("Route Request");
          console.dir(response, {
              depth: null
          });
          console.log("Route Request End");
          return response;
          

    } catch (e) {
          console.log(e);
          process.exit(-1);
      }
    }; 

}