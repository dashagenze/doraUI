import {FC, useState} from "react";
import {Option} from "../types/SelectTypes.ts";
import styles from '../styles.module.scss'
import clear from "../../../assets/clear.svg";
import selectTick from "../../../assets/selectTick.svg";
import check from "../../../assets/check.svg";

export interface ISelectMultiple {
  value: Option[];
  onChange: (value: Option[]) => void;
  options: Option[];
}
export const SelectMultiple: FC<ISelectMultiple> = ({options, value, onChange}) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (option: Option) => {
    let hasOptionInValue = value.find(item => item.id === option.id);
    if (!hasOptionInValue) {
      onChange([...value, option]);
      return
    }
    onChange(value.filter((item) => option.id !== item.id));
  }

  return (
    <div>
      <div className={styles.selectInputMultiple} onClick={() => setOpen(prev => !prev)}>
        {value.length ? (
          value.map((option) => (
            <div className={styles.chipWrap}>
              <span className={styles.chip}>{option.value}</span>
            </div>
          ))
        ) : (
            <>
              <span>Select some</span>
              {/*<img className={styles.tickIcon} src={selectTick}/>*/}
            </>
          )
        }
        <img className={styles.tickIcon} src={selectTick}/>
      </div>

      {open && (
        <div>
          {options.map((option) => {
            return <div className={value.find(item => item.id === option.id) ? styles.selected : styles.option}
                        onClick={() => handleClick(option)}>
              <p key={option.id}>{option.value}</p>
              {value.find(item => item.id === option.id) && (<img className={styles.checkIcon} src={check}/>)}
            </div>
          })}
        </div>
      )}
    </div>
  );
};
