import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

// Controller()のカッコの中がパス名
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('fuga')
  getFuga(@Query('text') text): string {
    return text;
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
