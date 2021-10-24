import React, { useState } from 'react';
import { useSelector } from '../../hook/useSelector';
import styles from './GeneratedPassword.module.css';
import copyImg from '../../assets/copy.png';
import generateImg from '../../assets/generate.svg';
import { useDispatch } from 'react-redux';
import {
  setPassword,
  setPasswordStrength,
} from '../../store/reducers/passwordReducer';
import {
  copyPassword,
  generatePassword,
  getPasswordStrength,
} from '../../common/functions';
import { Strength } from '../Strength/Strength';
import { Star } from '../Star/Star';

export const GeneratedPassword: React.FC = () => {
  const dispatch = useDispatch();

  const [animate, setAnimate] = useState(false);

  const settings = useSelector(s => s.settings);
  const { password, passwordStrength } = useSelector(s => s.password);

  const onPasswordGenerate = () => {
    setAnimate(true);
    const password = generatePassword({ ...settings });
    const strength = getPasswordStrength(password);
    dispatch(setPassword(password));
    dispatch(setPasswordStrength(strength));
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
        <Star password={password} strength={passwordStrength} />
        <button onClick={() => copyPassword(password)} title='copy'>
          <img src={copyImg} alt='copy' />
        </button>
        <button
          className={animate ? styles.animate : ''}
          onClick={onPasswordGenerate}
          onAnimationEnd={() => setAnimate(false)}
          title='generate'
        >
          <img src={generateImg} alt='generate' />
        </button>
      </div>

      <Strength passwordStrength={passwordStrength} />
    </div>
  );
};
