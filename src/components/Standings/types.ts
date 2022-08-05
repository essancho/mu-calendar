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
