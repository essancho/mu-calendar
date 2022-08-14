export const getSeasons = (): string[] => {
  const initialSeason = 2010;
  const currentSeason = new Date().getFullYear();
  const seasons = [];
  // eslint-disable-next-line
  for (let i = currentSeason; i >= initialSeason; i--) {
    seasons.push(i.toString());
  }
  return seasons;
};
export const test = () => {};
