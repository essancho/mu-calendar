import React, { useEffect, useState } from 'react';
import { IFixturesEntity } from 'app/types/fixturesTypes';
import dayjs from 'dayjs';
import { Typography } from 'antd';
import Fixture from './Fixture';

import styles from '../styles.module.scss';

interface Props {
  month: number;
  fixtures: IFixturesEntity[];
}
const GroupedFixtures: React.FC<Props> = ({ month, fixtures }) => {
  const [filtered, setFiltered] = useState<IFixturesEntity[]>([]);
  const filterFixtures = (arr: IFixturesEntity[]) => {
    const result = arr.filter((fix) => {
      return dayjs(fix.fixture.date).month() === month;
    });
    setFiltered(result);
  };
  const formattedMonth = dayjs().month(month).format('MMMM');
  useEffect(() => {
    filterFixtures(fixtures);
    // eslint-disable-next-line
  }, [fixtures]);

  return (
    <div className={styles.fixtureList}>
      <Typography.Title level={2}>{formattedMonth}</Typography.Title>
      <div>
        {filtered.map((fixture) => (
          <Fixture fixture={fixture} key={fixture.fixture.id} />
        ))}
      </div>
    </div>
  );
};

export default GroupedFixtures;
