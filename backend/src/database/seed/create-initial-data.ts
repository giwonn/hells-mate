import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import {
  Activity,
  Group,
  GroupMissionDate,
  GroupMissionDateList,
  MissionCategory,
  User,
  UserGroup,
} from '../entities';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: 1,
          nickname: '서하',
        },
        {
          id: 2,
          nickname: '동우',
        },
        {
          id: 3,
          nickname: '성용',
        },
        {
          id: 4,
          nickname: '기원',
          token: '2415143460',
        },
        {
          id: 5,
          nickname: '나은',
        },
        {
          id: 6,
          nickname: '재원',
        },
        {
          id: 7,
          nickname: '은호',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Group)
      .values([
        {
          id: 1,
          title: '언제까지 그렇게 살꺼냐고',
          content: '본격적으로 내몸의 지방을 썰어 보도록 하겠습니다.',
          startDate: '20220901',
          endDate: '20220907',
          token: 'token',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(GroupMissionDate)
      .values([
        {
          id: 1,
          Group: { id: 1 },
          date: '20220901',
        },
        {
          id: 2,
          Group: { id: 1 },
          date: '20220902',
        },
        {
          id: 3,
          Group: { id: 1 },
          date: '20220903',
        },
        {
          id: 4,
          Group: { id: 1 },
          date: '20220904',
        },
        {
          id: 5,
          Group: { id: 1 },
          date: '20220905',
        },
        {
          id: 6,
          Group: { id: 1 },
          date: '20220906',
        },
        {
          id: 7,
          Group: { id: 1 },
          date: '20220907',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(MissionCategory)
      .values([
        {
          id: 1,
          name: '식이조절',
        },
        {
          id: 2,
          name: '일상운동',
        },
      ])
      .execute();

    // await connection
    //   .createQueryBuilder()
    //   .insert()
    //   .into(UserGroup)
    //   .values([
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       isAdmin: true,
    //     },
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 2,
    //         },
    //       ],
    //     },
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 3,
    //         },
    //       ],
    //     },
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 4,
    //         },
    //       ],
    //     },
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 5,
    //         },
    //       ],
    //     },
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 6,
    //         },
    //       ],
    //     },
    //     {
    //       Group: [
    //         {
    //           id: 1,
    //         },
    //       ],
    //       User: [
    //         {
    //           id: 7,
    //         },
    //       ],
    //     },
    //   ])
    //   .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(GroupMissionDateList)
      .values([
        {
          id: 1,
          MissionCategory: { id: 2 },
          Group: { id: 1 },
          title:
            '출근 사무실(or 집 아파트계단) 시 엘리베이터 타지말고 계단이용 가보자고~~🏃🏻‍♀️',
          content: '인간적으로 5층 이상은 가자',
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Activity)
      .values([
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 1 },
          point: 3,
        },
        {
          id: 2,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 3 },
          point: 3,
        },
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 4 },
          point: 3,
        },
        {
          id: 1,
          User: { id: 3 },
          Group: { id: 1 },
          GroupMissionDate: { id: 1 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 3 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 4 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 2 },
          Group: { id: 1 },
          GroupMissionDate: { id: 5 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 3 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 1,
        },
        {
          id: 1,
          User: { id: 3 },
          Group: { id: 1 },
          GroupMissionDate: { id: 3 },
          point: 1,
        },
        {
          id: 1,
          User: { id: 4 },
          Group: { id: 1 },
          GroupMissionDate: { id: 1 },
          point: 3,
        },
        {
          id: 1,
          User: { id: 4 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 3,
        },
        {
          id: 1,
          User: { id: 4 },
          Group: { id: 1 },
          GroupMissionDate: { id: 3 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 4 },
          Group: { id: 1 },
          GroupMissionDate: { id: 4 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 5 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 3,
        },
        {
          id: 1,
          User: { id: 5 },
          Group: { id: 1 },
          GroupMissionDate: { id: 4 },
          point: 1,
        },

        {
          id: 1,
          User: { id: 6 },
          Group: { id: 1 },
          GroupMissionDate: { id: 1 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 6 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 6 },
          Group: { id: 1 },
          GroupMissionDate: { id: 3 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 6 },
          Group: { id: 1 },
          GroupMissionDate: { id: 4 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 7 },
          Group: { id: 1 },
          GroupMissionDate: { id: 1 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 7 },
          Group: { id: 1 },
          GroupMissionDate: { id: 2 },
          point: 5,
        },
        {
          id: 1,
          User: { id: 7 },
          Group: { id: 1 },
          GroupMissionDate: { id: 5 },
          point: 3,
        },
      ])
      .execute();
  }
}
