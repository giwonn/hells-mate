import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class createGroupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '아가리어터들아 제발 시작해라',
    description: '그룹 타이틀',
    required: true,
  })
  public title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '말만 하지말고 좀 시작해라.. 시작을 독려하는 소프트한 헬린이 육성 그룹',
    description: '그룹 설명',
    required: true,
  })
  public description: string;
}
