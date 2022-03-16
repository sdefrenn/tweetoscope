import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  yo(): string {
    return 'hi';
  }
}
