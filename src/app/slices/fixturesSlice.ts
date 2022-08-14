import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFixturesById } from 'api/standingsAPI';
import { FixturesParamsInterface, IInitialState } from 'app/types/fixturesTypes';
import { readData, writeData } from 'services/localStorage';

const initialState: IInitialState = {
  fixtures: [],
};

export const asyncGetFixturesByTeamId = createAsyncThunk(
  'fixtures/getFixtures',
  async (params: FixturesParamsInterface) => {
    const data = readData('fixtures');
    if (data) {
      const res = JSON.parse(data);
      if (res.updatedAt < Date.now() + 3600000) {
        return res.data.response;
      }
      const response = await getFixturesById(params);
      writeData('fixtures', response);
      return response.data.response;
    }
    const response = await getFixturesById(params);
    writeData('fixtures', response);
    return response.data.response;
  },
);

export const fixturesSlice = createSlice({
  name: 'fixtures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetFixturesByTeamId.fulfilled, (state, action) => {
      state.fixtures = action.payload;
    });
  },
});

export default fixturesSlice.reducer;
