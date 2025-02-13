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
import { ApiTags } from '@nestjs/swagger';

@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) {}

  @Get()
  @ApiTags('Monsters management')
  findAll() {
    console.log('#findAll#');
    return this.monstersService.findAll();
  }

  @Get(':id')
  @ApiTags('Monsters management')
  findOne(@Param('id') id: string) {
    console.log('#findOne#');
    return this.monstersService.findOne(id);
  }

  @Post()
  @ApiTags('Monsters incubation')
  create(@Body() createMonsterDto: any) {
    console.log('#create#');
    return this.monstersService.create(createMonsterDto);
  }

  @Put(':id')
  @ApiTags('Monsters management')
  update(@Param('id') id: string, @Body() updateMonsterDto: any) {
    console.log('#update#');
    return this.monstersService.update(id, updateMonsterDto);
  }

  @Delete(':id')
  @ApiTags('Monsters management')
  remove(@Param('id') id: string) {
    console.log('#remove#');
    return this.monstersService.remove(id);
  }
}
