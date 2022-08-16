import React from 'react';
import { Table } from 'antd';
import { IColumns, IPosition } from 'app/types/standingsTypes';

interface StandingsProps {
  dataSource: Array<IPosition>;
  columns: Array<IColumns>;
}

const StandingsTableComponent: React.FC<StandingsProps> = ({ dataSource, columns }) => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default StandingsTableComponent;
