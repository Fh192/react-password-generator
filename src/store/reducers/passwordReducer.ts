import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPasswordStrength } from '../../types';

const initialState = {
  password: '' as string,
  passwordStrength: 0 as IPasswordStrength,
  savedPasswords: [] as string[],
};

const passwordReducer = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPasswordStrength: (state, action: PayloadAction<IPasswordStrength>) => {
      state.passwordStrength = action.payload;
    },
    setSavedPasswords: (state, action: PayloadAction<string>) => {
      const includes = state.savedPasswords.includes(action.payload);
      console.log(includes);
      if (includes) {
        state.savedPasswords = state.savedPasswords.filter(
          p => p !== action.payload
        );
      } else {
        state.savedPasswords.unshift(action.payload);
      }
    },
  },
});

export const { setPassword, setPasswordStrength, setSavedPasswords } =
  passwordReducer.actions;

export default passwordReducer.reducer;
