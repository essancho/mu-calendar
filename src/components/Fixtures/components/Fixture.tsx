import React from 'react';
import dayjs from 'dayjs';

import { IFixturesEntity } from 'app/types/fixturesTypes';
// eslint-disable-next-line
import { Col, Divider, Row, Typography } from 'antd';

import styles from '../styles.module.scss';

interface Props {
  fixture: IFixturesEntity;
}

const Fixture: React.FC<Props> = ({ fixture }) => {
  return (
    <Row className={styles.fixture}>
      <Col span={6} className={styles.alignLeft}>
        <Typography.Text strong>
          {dayjs(fixture.fixture.date).format('D MMMM, ddd')}
        </Typography.Text>
        <Divider type="vertical" />
      </Col>
      <Col span={18}>
        <Row>
          <Col span={10} className={styles.alignRight}>
            <Typography.Text strong>{fixture.teams.home.name}</Typography.Text>
            <img width={25} src={fixture.teams.home.logo} alt="home" />
          </Col>
          <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography.Text strong className={styles.date}>
              {dayjs(fixture.fixture.date).format('HH:mm')}
            </Typography.Text>
          </Col>
          <Col span={10} className={styles.alignLeft}>
            <img width={25} src={fixture.teams.away.logo} alt="home" />
            <Typography.Text strong>{fixture.teams.away.name}</Typography.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Fixture;
