import {FC, useState} from "react";
import {Option} from "../types/SelectTypes.ts";
import styles from "../styles.module.scss";
import check from '../../../assets/check.svg'
import selectTick from '../../../assets/selectTick.svg'
import clear from '../../../assets/clear.svg'

export interface ISelectSingle {
  value: Option | null;
  onChange: (value: Option | null) => void;
  options: Option[];
}
export const SelectSingle: FC<ISelectSingle> = ({value, options, onChange}) => {
  const [open, setOpen] = useState<boolean>(false)

  const clearValue = () => {
    onChange(null)
  }
  const handleClick = (option: Option) => {
    let hasOptionInValue = value?.id === option.id
    if (!hasOptionInValue) {
      onChange(option);
      return
    }
    clearValue()
  }

  return (
    <div>
      <div className={styles.selectInput} onClick={() => setOpen(prev => !prev)}>
        {value ? (
          <>
            <span className={styles.chip}>{value.value}</span>
            <img className={styles.clearIcon} src={clear} onClick={clearValue}/>
          </>
        ) : (
          <>
            <span>Select one</span>
            <img className={styles.tickIcon} src={selectTick}/>
          </>
          )
        }
      </div>

      {open && (
        <div>
          {options.map((option) => {
            return <div className={value?.id === option.id ? styles.selected : styles.option} onClick={() => handleClick(option)}>
              <p key={option.id}>{option.value}</p>
              {value?.id === option.id && (<img className={styles.checkIcon} src={check}/>)}
            </div>
          })}
        </div>
      )}
    </div>
  )
};



