import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MonstersController } from './monsters.controller';
import { MonstersService } from './monsters.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BATTLE_INCUBATOR_MS',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'portfolio-incubator-bff',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'portfolio-incubator-bff-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [MonstersController],
  providers: [MonstersService],
})
export class MonstersModule {}
