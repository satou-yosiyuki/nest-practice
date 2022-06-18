import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memo } from './entities/memo.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Memo],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
