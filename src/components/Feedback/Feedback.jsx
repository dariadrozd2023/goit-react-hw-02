import s from './Feedback.module.css';
export function Feedback() {
  return (
    <>
      <ul className={s.decor}>
        <li>good</li>
        <li>neutral</li>
        <li>bad</li>
      </ul>
    </>
  );
}
