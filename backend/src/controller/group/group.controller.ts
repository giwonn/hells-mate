import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() createAuthDto: unknown) {
    return null
  }
}
