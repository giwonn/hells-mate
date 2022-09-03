import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { GroupService } from './group.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { createGroupDto, MissionDto } from '../dto/mission.dto';

@Controller('group')
@ApiTags('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiOperation({
    summary: '팀장이 그룹을 생성하는 api',
  })
  @Post()
  async createGroup(@Req() req: any, @Body() data: createGroupDto) {
    req.user.id = 1;
    const result = await this.groupService.createGroup(1, data);
    return {
      code: 200,
      message: '그룹이 정상적으로 등록 되었습니다. ',
      data: result,
    };
  }

  @ApiOperation({
    summary: '팀장이 미션을 입력하는 폼',
  })
  @Post(':groupId/mission')
  async createGroupMission(
    @Req() req: any,
    @Param('groupId') groupId: number,
    @Body() missionDto: MissionDto,
  ) {
    req.user.id = 1;
    const result = await this.groupService.createGroupMission(
      req.user,
      groupId,
      missionDto,
    );
    return {
      code: 200,
      message: '미션 생성 완료',
      data: result,
    };
  }

  @ApiOperation({
    summary: '해당 그룹의 참여도 통계 불러오기',
  })
  // url 뭐로할지 고민이에요 아무거나 해주세요
  @Get(':groupId/측정')
  async select참여도(@Req() req: any, @Param('groupId') groupId: number) {
    req.user.id = 1;
    const result = await this.groupService.select참여도(groupId);
    return {
      code: 200,
      message: '참여도 통계 보기',
      data: result,
    };
  }

  @Get(':groupId/invite')
  async invite(@Req() req: any, @Param('groupId') groupId: number) {
    console.log('-----');
    const inviteUrl = await this.groupService.createInviteUrl(groupId);
    return req;
  }
}
