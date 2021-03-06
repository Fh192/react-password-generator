import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IParamTypes } from '../../types';

const initialState = {
  length: 15,
  hasUppercase: true,
  hasLowercase: true,
  hasNumbers: true,
  hasSymbols: true,
};

const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    setPasswordParam: (
      state,
      action: PayloadAction<{ type: IParamTypes; has: boolean }>
    ) => {
      const { has, type } = action.payload;
      const isAnyHas = Object.entries(state).some(
        v => v[0] !== type && v[1] === true
      );

      if (isAnyHas) {
        state[type] = has;
      }
    },
  },
});

export const { setLength, setPasswordParam } = settingsReducer.actions;

export default settingsReducer.reducer;
