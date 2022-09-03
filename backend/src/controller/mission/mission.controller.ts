import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('mission')
@ApiTags('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @ApiOperation({
    summary: '미션 카테고리를 불러오는 api',
  })
  @Get('mission-category')
  async selectMissionCategory(@Req() req: any) {
    const result = await this.missionService.selectMissionCategory();
    return {
      code: 200,
      message: '미션카테고리 불러오기 완료',
      data: result,
    };
  }

  @ApiOperation({
    summary: '날짜 별 미션 목록의 정보 보기',
  })
  @Get('')
  @UseGuards(JwtAuthGuard)
  async selectMissionList(@Req() req: any) {
    const result = await this.missionService.selectMissionList();
    return {
      code: 200,
      message: '미션 별 목록 정보 불러오기 완료',
      data: result,
    };
  }
}
