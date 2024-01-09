import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonstersModule } from './monsters/monsters.module';

@Module({
  imports: [MonstersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
