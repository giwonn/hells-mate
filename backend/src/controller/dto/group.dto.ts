import { IsDate, isNotEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class createGroupDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '아가리어터들아 제발 시작해라',
    description: '그룹 타이틀',
    required: true,
  })
  public groupTitle: string;

  @IsString()
  @ApiProperty({
    example:
      '말만 하지말고 좀 시작해라.. 시작을 독려하는 소프트한 헬린이 육성 그룹',
    description: '그룹 설명',
    required: true,
  })
  public groupContent: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'user Id',
    description: '방장 유저 id',
    required: true,
  })
  public adminId: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'Sat Sep 03 2022 20:43:44 GMT+0900 (KST)',
    description: '그룹 시작일',
    required: true,
  })
  public startDate: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'Sat Oct 02 2022 20:43:44 GMT+0900 (KST)',
    description: '그룹 종료일',
    required: true,
  })
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '오늘은 맥주 마시지 마세요',
    description: '미션 타이틀',
    required: true,
  })
  public missionTitle: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '아니 다음주에 결혼식 간다고 살빼야 한다고 말만 하지말고 술만 좀 참아봐..',
    description: '미션 설명',
    required: true,
  })
  public missionContent: string;
}

export class groupIdDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '123456',
    description: 'Group ID 숫자',
    required: true,
  })
  public groupId: number;
}
