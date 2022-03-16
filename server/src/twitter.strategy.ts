import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from '@superfaceai/passport-twitter-oauth2';

import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      clientID: 'T05Jb3hlTWhYSy1DWlJycGsyM286MTpjaQ',
      clientSecret: 'ZMOK6KOzGq1-YRTe3Jr_4b-rdS2AuKt1zhq0d4fvgRSBtEbPz9',
      callbackURL: 'http://127.0.0.1:3000/twitter/redirect',
      scope: ['tweet.read'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(accessToken);
  }
}
