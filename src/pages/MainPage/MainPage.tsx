import React from 'react';

import Standings from 'components/Standings';
import Fixtures from 'components/Fixtures';

import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Standings />
      <Fixtures />
    </div>
  );
};

export default MainPage;
