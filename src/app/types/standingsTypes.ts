export interface IStandingsResponse {
  data: IStandingsData;
}

export interface IInitialState {
  positions: [] | IStandingsPosition[];
  team: null;
}

interface IStandingsData {
  get: string;
  parameters: IStandingsResponseParams;
  errors: any[];
  result: number;
  paging: {
    current: number;
    total: number;
  };
  response: IStandingsLeague[];
  results: number;
}

interface IStandingsResponseParams {
  season: string;
  league: string;
}

interface IStandingsLeague {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Array<Array<IStandingsPosition>>;
  };
}

export interface IStandingsPosition {
  rank: number;
  team: IStandingsTeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: null | string;
  status: string;
  description: string;
  all: IStandingsTeamStats;
  home: IStandingsTeamStats;
  away: IStandingsTeamStats;
  update: string;
}

interface IStandingsTeam {
  id: number;
  name: string;
  logo: string;
}

interface IStandingsTeamStats {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: IStandingsTeamGoals;
}
interface IStandingsTeamGoals {
  for: number;
  against: number;
}

export interface ParamsInterface {
  season: string;
  league: string;
}

export interface IPosition {
  key: number;
  rank: number;
  icon: string;
  name: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDiff: number;
  points: number;
}
export interface IColumns {
  title: string;
  dataIndex: string;
  key: string;
  render?: any;
}
