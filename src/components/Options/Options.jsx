import s from './Options.module.css';
import { Option } from '../Option/Option';

export function Options({good, neutral, bad}) {
  return (
    <ul className={s.decor}>
      <li><Option nameBTN={good}/></li>
      <li><Option nameBTN={neutral}/></li>
      <li><Option nameBTN={bad}/></li>
    </ul>
  );
}
