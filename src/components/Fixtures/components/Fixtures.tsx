import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { asyncGetFixturesByTeamId } from 'app/slices/fixturesSlice';
import GroupedFixtures from './GroupedFixtures';

import styles from '../styles.module.scss';

const FixturesComponent = () => {
  const dispatch = useAppDispatch();

  const fixtures = useAppSelector((state) => state.fixtures.fixtures);

  const months = [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    dispatch(asyncGetFixturesByTeamId({ season: '2022', team: '33' }));
  }, [dispatch]);

  return (
    <div className={styles.center}>
      {fixtures.length && (
        <div>
          {months.map((month) => (
            <GroupedFixtures month={month} fixtures={fixtures} key={month} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FixturesComponent;
