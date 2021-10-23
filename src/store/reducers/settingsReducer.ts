import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  length: 12,
  hasUppercase: true,
  hasLowercase: true,
  hasNumbers: true,
  hasSymbols: true,
};

type IParamTypes =
  | 'hasUppercase'
  | 'hasLowercase'
  | 'hasNumbers'
  | 'hasSymbols';

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

      state[type] = has;
    },
  },
});

export const { setLength, setPasswordParam } = settingsReducer.actions;

export default settingsReducer.reducer;