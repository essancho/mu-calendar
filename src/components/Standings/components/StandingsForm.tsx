import React from 'react';

import styles from '../styles.module.scss';

type Props = {
  item: string;
};

const StandingsForm = ({ item }: Props) => {
  return (
    <div className={styles.form}>
      {item.split('').map((letter: string) => {
        if (letter === 'W') {
          return (
            <div key={letter} className={`${styles.teamForm} ${styles.win}`}>
              <span>{letter}</span>
            </div>
          );
        }
        if (letter === 'D') {
          return (
            <div className={`${styles.teamForm} ${styles.draw}`}>
              <span>{letter}</span>
            </div>
          );
        }
        return (
          <div className={`${styles.teamForm} ${styles.lose}`}>
            <span>{letter}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StandingsForm;
