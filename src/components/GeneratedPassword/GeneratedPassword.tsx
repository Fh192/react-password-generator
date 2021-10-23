import React, { useState } from 'react';
import { useSelector } from '../../hook/useSelector';
import styles from './GeneratedPassword.module.css';
import copyImg from '../../assets/copy.png';
import generateImg from '../../assets/generate.svg';
import star from '../../assets/star.png';
import filledStar from '../../assets/filledStar.png';
import { useDispatch } from 'react-redux';
import {
  setPassword,
  setPasswordStrength,
  setSavedPasswords,
} from '../../store/reducers/passwordReducer';
import {
  copyPassword,
  generatePassword,
  getPasswordStrength,
} from '../../common/functions';

export const GeneratedPassword: React.FC = () => {
  const dispatch = useDispatch();

  const [animate, setAnimate] = useState(false);

  const settings = useSelector(s => s.settings);
  const { password, passwordStrength } = useSelector(s => s.password);
  const isPasswordSaved = useSelector(s =>
    s.password.savedPasswords.includes(password)
  );

  const onPasswordGenerate = () => {
    setAnimate(true);
    const password = generatePassword({ ...settings });
    const strength = getPasswordStrength(password);
    dispatch(setPassword(password));
    dispatch(setPasswordStrength(strength));
  };

  const savePassword = () => {
    dispatch(setSavedPasswords(password));
  };

  return (
    <div className={styles.generatedPassword}>
      <input
        className={styles.input}
        type='text'
        value={password}
        contentEditable='false'
        disabled
      />
      <div className={styles.icons}>
        <button onClick={savePassword}>
          <img src={isPasswordSaved ? filledStar : star} alt='' />
        </button>
        <button onClick={() => copyPassword(password)}>
          <img src={copyImg} alt='copy' />
        </button>
        <button
          className={animate ? styles.animate : ''}
          onClick={onPasswordGenerate}
          onAnimationEnd={() => setAnimate(false)}
        >
          <img src={generateImg} alt='generate' />
        </button>
      </div>

      <div className={styles.strengthWrap}>
        <div
          className={`${styles.strength} ${
            styles[`strength${passwordStrength}`]
          }`}
        />
      </div>
    </div>
  );
};
