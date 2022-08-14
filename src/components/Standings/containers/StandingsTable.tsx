import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { asyncGetStandingsByLeagueId } from 'app/slices/standingsSlice';
import { IPosition, IStandingsPosition } from 'app/types/standingsTypes';
import { getSeasons } from 'services/seasons';
import { ColumnsType } from 'antd/lib/table';

import StandingsTableComponent from '../components/StandingsTable';

import StandingsForm from '../components/StandingsForm';

const StandingsTable: React.FC = () => {
  const options = getSeasons();
  const [season, setSeason] = useState<string>(options[0]);
  const [dataSource, setDataSource] = useState<IPosition[]>([]);
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
        form: item.form,
      };
      return team;
    });
    setDataSource(res);
  };

  const dispatch = useAppDispatch();
  const positions = useAppSelector((state) => state.standings.positions);

  const columns: ColumnsType<IPosition> = [
    {
      title: 'Position',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Club',
      dataIndex: 'icon',
      key: 'icon',
      render: (icon: string) => <img width={25} alt="img" src={icon} />,
      colSpan: 2,
      align: 'left',
    },
    {
      title: '',
      dataIndex: 'name',
      key: 'Name',
      colSpan: 0,
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
      title: 'GF',
      dataIndex: 'goalsFor',
      key: 'goalsFor',
    },
    {
      title: 'GA',
      dataIndex: 'goalsAgainst',
      key: 'goalsAgainst',
    },
    {
      title: 'GD',
      dataIndex: 'goalsDiff',
      key: 'goalsDiff',
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
      render: (point) => <strong>{point}</strong>,
    },
    {
      title: 'Form',
      dataIndex: 'form',
      key: 'form',
      render: (item: string) => <StandingsForm item={item} />,
    },
  ];

  useEffect(() => {
    dispatch(asyncGetStandingsByLeagueId({ season, league: '39' }));
  }, [dispatch, season]);

  useEffect(() => {
    prepareData(positions);
  }, [positions]);

  return (
    <StandingsTableComponent
      setSeason={setSeason}
      dataSource={dataSource}
      columns={columns}
      season={season}
      options={options}
    />
  );
};

export default StandingsTable;
