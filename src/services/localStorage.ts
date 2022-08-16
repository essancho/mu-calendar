import { IFixturesResponse } from 'app/types/fixturesTypes';
import { IStandingsResponse } from 'app/types/standingsTypes';

type KeyType = 'fixtures' | 'standings';
type ResponseType = IStandingsResponse | IFixturesResponse;

export const writeData = (key: KeyType, data: ResponseType): void => {
  const updatedData = {
    updatedAt: Date.now(),
    ...data,
  };
  localStorage.setItem(key, JSON.stringify(updatedData));
};

export const readData = (key: KeyType): string | null => {
  return localStorage.getItem(key) || null;
};
