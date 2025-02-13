import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MonstersService {
  constructor(
    @Inject('BATTLE_INCUBATOR_MS') private client: ClientProxy,
    @Inject('MONSTERS_MS') private monstersClient: ClientProxy,
  ) {}

  async findAll() {
    console.log('#findAll#');
    return this.monstersClient.send<any>('get-all-monsters', {});
  }

  async findOne(id: string) {
    console.log('#findOne#');
    return this.monstersClient.send<any>('find-monster-by-code', { id: id });
  }

  async create(createMonsterDto: any) {
    return this.client.emit<any>('create-monster-topic', createMonsterDto);
  }

  async update(id: string, updateMonsterDto: any) {
    console.log('#update#');
    return this.monstersClient.send<any>('update-monster', {
      id: id,
      payload: updateMonsterDto,
    });
  }

  async remove(id: string) {
    console.log('#remove#');
    return this.monstersClient.send<any>('delete-monster-by-code', { id: id });
  }
}
