import './App.css';

import { Description } from './components/Description/Description';
import { Feedback } from './components/Feedback/Feedback';
import { Options } from './components/Options/Options';

export default function App() {
  const name = 'Sip Happens Café';
  const paragraph =
    'Please leave your feedback about our service by selecting one of the options below';
  const nameBTN = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Description name={name} paragraph={paragraph} />
      <Options nameBTN={nameBTN} />
      <Feedback />
    </>
  );
}
