import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { ApiOperation } from '@nestjs/swagger';
import { createGroupDto } from './dto/mission.dto';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @ApiOperation({
    summary: '팀장이 그룹을 생성하는 api',
  })
  @Post()
  async createGroup(@Req() req: any, @Body() data: createGroupDto) {
    req.user.id = 1;
    const result = await this.missionService.createGroup(data);
    return {
      code: 200,
      message: '그룹이 정상적으로 등록 되었습니다. ',
      data: result,
    };
  }
}
