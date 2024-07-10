import s from './Options.module.css';

export const Options = ({
   valueOption,
    // handelReset, 
    handelOnClick }) => {
  return (
    <ul className={s.decor}>
      <li>
        <button className={s.decorBTN} onClick={handelOnClick} type="button">
          {valueOption.good}
        </button>
      </li>
      <li>
        <button className={s.decorBTN} type="button">
          {valueOption.neutral}
        </button>
      </li>
      <li>
        <button className={s.decorBTN} type="button">
          {valueOption.bad}
        </button>
      </li>
      <li>
        {/* <button className={s.decorBTN} onClick={handelReset} type="button">
          {valueOption.reset}
        </button> */}
      </li>
    </ul>
  );
};
