import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import routeRequest from './twitter_api_calls/twitter_api_call';

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

  /*
  Get from the API 1 single Tweet
  */
  @Post('getTweet')
  searchTweet(@Req() req: Request): Promise<any> {

    const baseURL = `https://api.twitter.com/2/tweets/${req.body.id}`;

    var params: string = "?";
    params += "tweet.fields=created_at,referenced_tweets,author_id,conversation_id";
    params += "&";
    params += "expansions=author_id,referenced_tweets.id";
    params += "&";
    params += "user.fields=name";

    const fullURL = baseURL+params;

    return routeRequest(fullURL);

    }; 
    
  /*
  Get from the API 1 User Timeline
  */
  @Post('userTimeline')
  searchUserTimeline(@Req() req: Request): Promise<any> {

    const baseURL = `https://api.twitter.com/2/users/${req.body.id}/tweets`;

    var params: string = "?";
    params += "tweet.fields=created_at,referenced_tweets,author_id,conversation_id";
    params += "&";
    params += "expansions=author_id,referenced_tweets.id";
    params += "&";
    params += "user.fields=name";
    if (req.body.p_token && req.body.p_token != "") {
      params += "&";
      params += `pagination_token=${req.body.p_token}`;
    }

    const fullURL = baseURL+params;

    return routeRequest(fullURL);

  }

  @Post('searchReplyTweets')
  searchReplyTweets(@Req() req: Request): Promise<any>{

    const baseURL = `https://api.twitter.com/2/tweets/search/recent`;
    var params: string = "?"; //Do not remove
    params += `query=conversation_id:${req.body.id}`;
    params += "&";
    params += "tweet.fields=created_at,referenced_tweets,author_id,conversation_id";
    params += "&";
    params += "expansions=author_id,referenced_tweets.id";
    params += "&";
    params += "user.fields=name";
    if (req.body.p_token && req.body.p_token != "") {
      params += "&";
      params += `next_token=${req.body.p_token}`;
    }

    const fullURL = baseURL+params;

    console.log("Full URL");
    console.log(fullURL);

    return routeRequest(fullURL);

  }

  @Post('mockup')
  mockup(@Req() req: Request): Promise<any>{

  const baseURL = `api route with some parameter ${req.body.something1} and ${req.body.something2}`;
  var params: string = "?"; //Do not remove
  params += "relevant parameter 1";
  params += "&"; 
  params += "relevant parameter 2"

  const fullURL = baseURL+params;

  return routeRequest(fullURL);

  }

}