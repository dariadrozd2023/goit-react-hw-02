import s from './Option.module.css'
export function Option({nameBtn}){
    return( 
         <>
        <button className={s.decor}>{nameBtn}</button>
    </>)
    
}