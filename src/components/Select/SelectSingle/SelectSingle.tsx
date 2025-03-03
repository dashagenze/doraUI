import { FC } from 'react';
import { Option } from '../types/SelectTypes.ts';
import styles from '../styles.module.scss';
import SelectTick from '../../../assets/selectTick.svg?react';
import CheckIcon from '../../../assets/check.svg?react';
import Clear from '../../../assets/clear.svg?react';
import { Dropdown } from '../Dropdown/Dropdown.tsx';

export interface ISelectSingle {
  value: Option | null;
  onChange: (value: Option | null) => void;
  options: Option[];
}

export const SelectSingle: FC<ISelectSingle> = ({ value, options, onChange }) => {
  const clearValue = () => {
    onChange(null);
  };
  const handleClick = (option: Option) => {
    const hasOptionInValue = value?.id === option.id;
    if (!hasOptionInValue) {
      onChange(option);
      return;
    }
    clearValue();
  };

  return (
    <Dropdown
      switcher={
        <div className={styles.selectInput}>
          {value ? (
            <>
              <span className={styles.chip}>{value.value}</span>
              <Clear className={styles.clearIcon} onClick={clearValue} />
            </>
          ) : (
            <>
              <span>Select one</span>
              <SelectTick className={styles.tickIcon} />
            </>
          )}
        </div>
      }>
      {options.map((option) => {
        return (
          <div
            className={value?.id === option.id ? styles.selected : styles.option}
            onClick={() => handleClick(option)}>
            <p key={option.id}>{option.value}</p>
            {value?.id === option.id && <CheckIcon className={styles.checkIcon} />}
          </div>
        );
      })}
    </Dropdown>
  );
};
