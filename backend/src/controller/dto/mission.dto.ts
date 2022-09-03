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

export class MissionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: '미션 카테고리 id',
    required: true,
  })
  public categoryId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '오늘은 맥주 마시지 마세요',
    description: '미션 타이틀',
    required: true,
  })
  public title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '아니 다음주에 결혼식 간다고 살빼야 한다고 말만 하지말고 술만 좀 참아봐..',
    description: '미션 설명',
    required: true,
  })
  public description: string;
}

export class CompleteMissionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: '',
    required: true,
  })
  public date: string;
}
