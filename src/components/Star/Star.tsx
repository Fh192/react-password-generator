import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hook/useSelector';
import { setSavedPasswords } from '../../store/reducers/passwordReducer';
import { IPasswordStrength } from '../../types';
import star from '../../assets/star.png';
import filledStar from '../../assets/filledStar.png';

interface Props {
  password: string;
  strength: IPasswordStrength;
}

export const Star: React.FC<Props> = ({ password, strength }) => {
  const dispatch = useDispatch();

  const isPasswordSaved = useSelector(s =>
    s.password.savedPasswords.some(v => v.password === password)
  );

  const savePassword = () => {
    dispatch(setSavedPasswords({ password, strength }));
  };

  return (
    <button
      onClick={savePassword}
      title={`${isPasswordSaved ? 'remove' : 'save'}`}
    >
      <img src={isPasswordSaved ? filledStar : star} alt='star' />
    </button>
  );
};
