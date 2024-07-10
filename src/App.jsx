import { useState } from 'react';
import './App.css';

import { Description } from './components/Description/Description';
import { Feedback } from './components/Feedback/Feedback';
import { Options } from './components/Options/Options';

export default function App() {
  const [clicked, setClicked] = useState({ good: 0, neutral: 0, bad: 0 });
  //*-------------------------------------------------------------------*//

  const name = 'Sip Happens Café';
  const paragraph =
    'Please leave your feedback about our service by selecting one of the options below';

  //*-------------------------------------------------------------------*//

  const valueOption = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
    reset: 'Reset',
  };

  //*-------------------------------------------------------------------*//

  function handelOnClick() {
    setClicked(clicked + 1);
  }
//   function handelReset() {
//     setClicked({ good: 0, neutral: 0, bad: 0 });
//   }
  //*-------------------------------------------------------------------*//

  return (
    <>
      <Description name={name} paragraph={paragraph} />
      <Options
        valueOption={valueOption}
        // handelReset={handelReset}
        handelOnClick={handelOnClick}
      />
      <Feedback valueOption={valueOption} />
    </>
  );
}
