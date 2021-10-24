import React from 'react';
import { copyPassword } from '../../common/functions';
import { useSelector } from '../../hook/useSelector';
import { Star } from '../Star/Star';
import { Strength } from '../Strength/Strength';
import styles from './SavedPasswords.module.css';

export const SavedPasswords: React.FC = () => {
  const { savedPasswords } = useSelector(s => s.password);

  return (
    <div className={styles.savedPasswords}>
      {savedPasswords.length ? (
        <ul className={styles.list}>
          {savedPasswords.map(p => (
            <li className={styles.item} key={p.password}>
              <div className={styles.icon}>
                <Star password={p.password} strength={p.strength} />
              </div>

              <div
                className={styles.password}
                onClick={() => copyPassword(p.password)}
                title='copy'
              >
                <span>{p.password}</span>
              </div>
              <div className={styles.strength}>
                <Strength passwordStrength={p.strength} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noPasswords}>
          <span> No saved passwords yet</span>
        </div>
      )}
    </div>
  );
};
