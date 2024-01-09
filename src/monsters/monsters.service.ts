import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MonstersService {
  constructor(@Inject('BATTLE_INCUBATOR_MS') private client: ClientProxy) {}

  // async findAll() {
  //   return this.client.send<any>('get-all-monsters', {});
  // }

  // async findOne(id: string) {
  //   return this.client.send<any>('find-monster-by-code', { id: id });
  // }

  async create(createMonsterDto: any) {
    return this.client.emit<any>('create-monster-topic', createMonsterDto);
  }

  // async update(id: string, updateMonsterDto: any) {
  //   return this.client.send<any>('update-monster', {
  //     id: id,
  //     payload: updateMonsterDto,
  //   });
  // }

  // async remove(id: string) {
  //   return this.client.send<any>('delete-monster-by-code', { id: id });
  // }
}
