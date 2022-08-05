import apiInstance from 'api';
import { FixturesParamsInterface, IFixturesResponse } from 'app/types/fixturesTypes';
import { IStandingsResponse, ParamsInterface } from 'app/types/standingsTypes';

export const getStandingsById = (params: ParamsInterface): Promise<IStandingsResponse> => {
  return apiInstance.get('standings', { params });
};

export const getFixturesById = (params: FixturesParamsInterface): Promise<IFixturesResponse> => {
  return apiInstance.get('fixtures', { params });
};
