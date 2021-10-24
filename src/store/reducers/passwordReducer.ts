import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPasswordStrength } from '../../types';

interface ISavedPassword {
  password: string;
  strength: IPasswordStrength;
}

const initialState = {
  password: '' as string,
  passwordStrength: 0 as IPasswordStrength,
  savedPasswords: JSON.parse(
    localStorage.getItem('savedPasswords') || '[]'
  ) as ISavedPassword[],
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
    setSavedPasswords: (state, action: PayloadAction<ISavedPassword>) => {
      const { password } = action.payload;
      const includes = state.savedPasswords.some(v => v.password === password);

      localStorage.removeItem('savedPasswords');

      if (includes) {
        state.savedPasswords = state.savedPasswords.filter(
          p => p.password !== password
        );
      } else {
        state.savedPasswords.unshift(action.payload);
      }

      localStorage.setItem(
        'savedPasswords',
        JSON.stringify(state.savedPasswords)
      );
    },
  },
});

export const { setPassword, setPasswordStrength, setSavedPasswords } =
  passwordReducer.actions;

export default passwordReducer.reducer;
