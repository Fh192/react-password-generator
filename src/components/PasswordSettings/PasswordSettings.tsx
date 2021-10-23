import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { generatePassword, getPasswordStrength } from '../../common/functions';
import { useSelector } from '../../hook/useSelector';
import {
  setPassword,
  setPasswordStrength,
} from '../../store/reducers/passwordReducer';
import { setLength } from '../../store/reducers/settingsReducer';
import { Checkbox } from '../Checkbox/Checkbox';
import styles from './PasswordSettings.module.css';

export const PasswordSettings: React.FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(s => s.settings);
  const { length, hasLowercase, hasNumbers, hasSymbols, hasUppercase } =
    settings;

  const lengthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const len = e.currentTarget.value;

    if (!/[a-z]/gi.test(len) && +len <= 50) {
      dispatch(setLength(+len));
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0) {
      dispatch(setLength(1));
    }
  };

  useEffect(() => {
    const password = generatePassword({ ...settings });
    const strength = getPasswordStrength(password);

    dispatch(setPassword(password));
    dispatch(setPasswordStrength(strength));
  }, [dispatch, settings]);

  return (
    <div className={styles.passwordSettings}>
      <div className={styles.title}>
        <h2>Customize your password</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.length}>
          <div className={styles.lengthTitle}>
            <label htmlFor='passLen'>Password Length</label>
          </div>
          <div className={styles.lengthInputs}>
            <input
              type='text'
              id='passLen'
              value={length}
              onChange={lengthHandler}
              onBlur={blurHandler}
            />
            <input
              className={styles.range}
              type='range'
              min='1'
              max='50'
              step='1'
              value={length}
              onChange={lengthHandler}
            />
          </div>
        </div>
        <div className={styles.checkboxWrap}>
          <Checkbox
            label='Uppercase'
            checked={hasUppercase}
            paramType='hasUppercase'
          />
          <Checkbox
            label='Lowercase'
            checked={hasLowercase}
            paramType='hasLowercase'
          />
          <Checkbox
            label='Numbers'
            checked={hasNumbers}
            paramType='hasNumbers'
          />
          <Checkbox
            label='Symbols'
            checked={hasSymbols}
            paramType='hasSymbols'
          />
        </div>
      </form>
    </div>
  );
};
