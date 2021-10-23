import React from 'react';
import { useDispatch } from 'react-redux';
import { setPasswordParam } from '../../store/reducers/settingsReducer';
import { IParamTypes } from '../../types';
import styles from './Checkbox.module.css';

export const Checkbox: React.FC<{
  label: 'Uppercase' | 'Lowercase' | 'Numbers' | 'Symbols';
  checked: boolean;
  paramType: IParamTypes;
}> = ({ checked, label, paramType }) => {
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const has = e.currentTarget.checked;
    dispatch(setPasswordParam({ type: paramType, has }));
  };

  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        id={label}
        checked={checked}
        onChange={changeHandler}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
