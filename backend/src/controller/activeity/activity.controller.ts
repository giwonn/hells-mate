import { Controller, Post, Body, Req } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ApiOperation } from '@nestjs/swagger';
import { CompleteMissionDto } from '../dto/mission.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  @ApiOperation({
    summary: '(팀원)미션 인증하기',
  })
  async completeMission(
    @Req() req: any,
    @Body() completeMissionDto: CompleteMissionDto,
  ) {
    req.user.id = 1;
    const result = this.activityService.completeMission(
      req.user.id,
      completeMissionDto,
    );
    return {
      code: 200,
      message: '미션 인증하기 완료',
      data: result,
    };
  }
}
