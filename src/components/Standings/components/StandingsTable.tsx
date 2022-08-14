import React from 'react';

import { Table } from 'antd';
import { IPosition } from 'app/types/standingsTypes';
import { ColumnsType } from 'antd/lib/table';

import FilterBlock from './FilterBlock';

interface StandingsProps {
  dataSource: Array<IPosition>;
  columns: ColumnsType<IPosition>;
  season: string;
  options: string[];
  setSeason: React.Dispatch<React.SetStateAction<string>>;
}

const StandingsTableComponent: React.FC<StandingsProps> = ({
  dataSource,
  columns,
  season,
  options,
  setSeason,
}) => {
  return (
    <div>
      <FilterBlock season={season} options={options} setSeason={setSeason} />
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default StandingsTableComponent;
