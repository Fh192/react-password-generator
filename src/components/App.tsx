import React, { useState } from 'react';
import { copyPassword } from '../common/functions';
import { useSelector } from '../hook/useSelector';
import './App.css';
import { GeneratedPassword } from './GeneratedPassword/GeneratedPassword';
import { PasswordSettings } from './PasswordSettings/PasswordSettings';

const App: React.FC = () => {
  const { password } = useSelector(s => s.password);
  const [scaleBtn, setScaleBtn] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
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
      </div>
    </div>
  );
};

export default App;
