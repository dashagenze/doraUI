import {FC} from "react";
import {Option} from "../types/SelectTypes.ts";
import styles from '../styles.module.scss'

export interface ISelectMultiple {
  value: Option[];
  onChange: (value: Option[]) => void;
  options: Option[];
}
export const SelectMultiple: FC<ISelectMultiple> = ({options, value, onChange}) => {

  const handleClick = (option: Option) => {
    let hasOptionInValue = value.find(item => item.id === option.id);
    if (!hasOptionInValue) {
      onChange([...value, option]);
      return
    }
    onChange(value.filter((item) => option.id !== item.id));
  }

  return (
    <div className={styles.selectContainer}>
      <details>
        <summary>{value.length ? value.map((option) => <span className={styles.chip}>{option.value}</span>) : 'Select some'}</summary>
        {options.map((option) => {
          return (
            <>
              <p className={value.find(item => item.id === option.id) ? styles.selected : styles.option} key={option.id} onClick={() => handleClick(option)}>{option.value}</p>
            </>
        )
        })}

      </details>
    </div>
  );
};
