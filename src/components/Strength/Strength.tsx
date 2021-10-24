import React from 'react';
import { IPasswordStrength } from '../../types';
import styles from './Strength.module.css';

interface Props {
  passwordStrength: IPasswordStrength;
}

export const Strength: React.FC<Props> = ({ passwordStrength }) => {
  return (
    <div className={styles.strengthWrap}>
      <div
        className={`${styles.strength} ${
          styles[`strength${passwordStrength}`]
        }`}
      />
    </div>
  );
};
