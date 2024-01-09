import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MonstersService } from './monsters.service';

@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) {}

  // @Get()
  // findAll() {
  //   return this.monstersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.monstersService.findOne(id);
  // }

  @Post()
  create(@Body() createMonsterDto: any) {
    console.log('#create#');
    return this.monstersService.create(createMonsterDto);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateMonsterDto: any) {
  //   return this.monstersService.update(id, updateMonsterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.monstersService.remove(id);
  // }
}
