export interface IInitialState {
  fixtures: [] | IFixturesEntity[];
}

export interface FixturesParamsInterface {
  season: string;
  team: string;
}
export interface IFixturesResponse {
  data: IFixturesData;
}

interface IFixturesDataPaging {
  current: number;
  total: number;
}
interface IFixturesDataParams {
  season: string;
  team: string;
}

interface IFixturesData {
  error: Array<any>;
  get: string;
  paging: IFixturesDataPaging;
  parameters: IFixturesDataParams;
  results: number;
  response: Array<IFixturesEntity>;
}

export interface IFixturesEntity {
  fixture: IFixturesFixture;
  goals: IFixturesGoals;
  league: IFixturesLeague;
  score: IFixturesScore;
  teams: IFixturesTeams;
}

interface IFixturesFixturePeriods {
  first: null | number;
  second: null | number;
}

interface IFixturesFixtureStatus {
  long: string;
  short: string;
  elapsed: null;
}
interface IFixturesFixtureVenue {
  city: string;
  id: number;
  name: string;
}

interface IFixturesFixture {
  id: number;
  date: string;
  periods: IFixturesFixturePeriods;
  referee: string;
  status: IFixturesFixtureStatus;
  timestamp: number;
  timezone: string;
  venue: IFixturesFixtureVenue;
}

interface IFixturesGoals {
  home: null | number;
  away: null | number;
}

interface IFixturesLeague {
  country: string;
  falg: string;
  id: number;
  logo: string;
  name: string;
  round: string;
  season: number;
}

interface IFixturesScoreDetails {
  home: null | number;
  away: null | number;
}

interface IFixturesScore {
  extratime: IFixturesScoreDetails;
  fulltime: IFixturesScoreDetails;
  halftime: IFixturesScoreDetails;
  penalty: IFixturesScoreDetails;
}

interface IFixturesTeam {
  id: string;
  logo: string;
  winner: null | boolean;
  name: string;
}

interface IFixturesTeams {
  away: IFixturesTeam;
  home: IFixturesTeam;
}
