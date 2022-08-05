import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { asyncGetStandingsByLeagueId } from 'app/slices/standingsSlice';
import { IPosition, IStandingsPosition } from 'app/types/standingsTypes';

import StandingsTableComponent from '../components/StandingsTable';

const StandingsTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<Array<IPosition>>([]);

  const prepareData = (data: Array<IStandingsPosition>) => {
    const res = data.map((item: IStandingsPosition) => {
      const team = {
        key: item.rank,
        rank: item.rank,
        icon: item.team.logo,
        name: item.team.name,
        played: item.all.played,
        won: item.all.win,
        lost: item.all.lose,
        drawn: item.all.draw,
        goalsFor: item.all.goals.for,
        goalsAgainst: item.all.goals.against,
        goalsDiff: item.goalsDiff,
        points: item.points,
      };
      return team;
    });
    setDataSource(res);
  };

  const dispatch = useAppDispatch();
  const positions = useAppSelector((state) => state.standings.positions);

  const columns = [
    {
      title: 'Position',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: '',
      dataIndex: 'icon',
      key: 'icon',
      render: (icon: string) => <img width={25} alt="img" src={icon} />,
    },
    {
      title: 'Club',
      dataIndex: 'name',
      key: 'Name',
    },
    {
      title: 'Played',
      dataIndex: 'played',
      key: 'played',
    },
    {
      title: 'Won',
      dataIndex: 'won',
      key: 'won',
    },
    {
      title: 'Lost',
      dataIndex: 'lost',
      key: 'lost',
    },
    {
      title: 'Drawn',
      dataIndex: 'drawn',
      key: 'drawn',
    },
    {
      title: 'Goals For',
      dataIndex: 'goalsFor',
      key: 'goalsFor',
    },
    {
      title: 'Goals Against',
      dataIndex: 'goalsAgainst',
      key: 'goalsAgainst',
    },
    {
      title: 'Goals Difference',
      dataIndex: 'goalsDiff',
      key: 'goalsDiff',
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
    },
  ];

  useEffect(() => {
    dispatch(asyncGetStandingsByLeagueId({ season: '2022', league: '39' }));
  }, [dispatch]);

  useEffect(() => {
    prepareData(positions);
  }, [positions]);

  return <StandingsTableComponent dataSource={dataSource} columns={columns} />;
};

export default StandingsTable;
