import passwordReducer from './passwordReducer';
import settingsReducer from './settingsReducer';

export const rootReducer = {
  password: passwordReducer,
  settings: settingsReducer,
};
