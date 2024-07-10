import s from './Feedback.module.css';
export function Feedback(valueOption) {
  return (
    <>
      <ul className={s.decor}>
        <li>good:{valueOption.good}</li>
        <li>neutral:{valueOption.neutral}</li>
        <li>bad:{valueOption.bad}</li>
      </ul>
    </>
  );
}
