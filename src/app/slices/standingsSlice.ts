import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStandingsById } from 'api/standingsAPI';
import { IInitialState, ParamsInterface } from 'app/types/standingsTypes';
import { readData, writeData } from 'services/localStorage';

const initialState: IInitialState = {
  positions: [],
  team: null,
};

export const asyncGetStandingsByLeagueId = createAsyncThunk(
  'standings/getStandings',
  async (params: ParamsInterface) => {
    const data = readData('standings');
    if (data) {
      const res = JSON.parse(data);
      if (res.updatedAt < Date.now() + 3600000 && res.data.parameters.season === params.season) {
        return res.data.response[0].league.standings[0];
      }
      const response = await getStandingsById(params);
      writeData('standings', response);
      return response.data.response[0].league.standings[0];
    }
    const response = await getStandingsById(params);
    writeData('standings', response);
    return response.data.response[0].league.standings[0];
  },
);

export const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetStandingsByLeagueId.fulfilled, (state, action) => {
      state.positions = action.payload;
    });
  },
});

export default standingsSlice.reducer;
