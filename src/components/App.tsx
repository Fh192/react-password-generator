import React, { useEffect, useRef, useState } from 'react';
import { copyPassword, scrollToSection } from '../common/functions';
import { useSelector } from '../hook/useSelector';
import './App.css';
import { GeneratedPassword } from './GeneratedPassword/GeneratedPassword';
import { PasswordSettings } from './PasswordSettings/PasswordSettings';
import { SavedPasswords } from './SavedPasswords/SavedPasswords';
import scrollImg from '../assets/scroll.svg';

const App: React.FC = () => {
  const { password, savedPasswords } = useSelector(s => s.password);
  const [scaleBtn, setScaleBtn] = useState(false);
  const savedPasswordsRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: WheelEvent) => {
      const direction = e.deltaY < 0 ? 'up' : 'down';

      if (direction === 'down') {
        scrollToSection(savedPasswordsRef.current);
      } else {
        scrollToSection(mainRef.current);
      }
    };

    document.addEventListener('wheel', listener);
    return () => document.removeEventListener('wheel', listener);
  }, [mainRef, savedPasswordsRef]);

  return (
    <div className='App'>
      <div className='container'>
        <div className='mainWrapper' ref={mainRef}>
          <div className='subtitle'>
            <h2>PASSWORD GENERATOR TOOL</h2>
          </div>
          <div className='title'>
            <h1>Generate a secure password</h1>
          </div>
          <div className='main'>
            <GeneratedPassword />
            <PasswordSettings />
          </div>
          <div
            className={`copy ${scaleBtn ? 'copyScale' : ''}`}
            onClick={() => {
              setScaleBtn(true);
              copyPassword(password);
            }}
            onAnimationEnd={() => setScaleBtn(false)}
          >
            <button>Copy password</button>
          </div>
          <div className='scroll'>
            <img src={scrollImg} alt='scroll' />
          </div>
        </div>
        <div className='savedPasswordsWrap' ref={savedPasswordsRef}>
          <SavedPasswords />
        </div>
      </div>
    </div>
  );
};

export default App;
