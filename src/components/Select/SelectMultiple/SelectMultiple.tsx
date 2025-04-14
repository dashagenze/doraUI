import { FC, useMemo } from 'react';
import { Option } from '../types/SelectTypes.ts';
import styles from '../styles.module.scss';
import SelectTick from '../../Icon/assets/selectTick.svg?react';
import CheckIcon from '../../Icon/assets/check.svg?react';
import { Dropdown } from '../../Dropdown/Dropdown.tsx';

export interface ISelectMultiple {
  value: Option[];
  onChange: (value: Option[]) => void;
  options: Option[];
}

const createValueMap = (value: Option[]) => {
  const result: { [id: string]: string } = {};
  value.forEach((option) => {
    result[option.id] = option.value;
  });
  return result;
};

export const SelectMultiple: FC<ISelectMultiple> = ({ options, value, onChange }) => {
  const valueMap = useMemo(() => createValueMap(value), [value]);

  const handleClick = (option: Option) => {
    const hasOptionInValue = value.find((item) => item.id === option.id);
    if (!hasOptionInValue) {
      onChange([...value, option]);
      return;
    }
    onChange(value.filter((item) => option.id !== item.id));
  };

  return (
    <Dropdown
      switcher={
        <div className={styles.selectInput}>
          {value.length ? (
            <div className={styles.chipWrap}>
              {value.map((option) => (
                <span key={option.id} className={styles.chip}>
                  {option.value}
                </span>
              ))}
            </div>
          ) : (
            <>
              <span>Select some</span>
            </>
          )}
          <SelectTick className={styles.tickIcon} />
        </div>
      }>
      <div aria-multiselectable>
        {options.map((option) => {
          return (
            <div
              role={'option'}
              key={option.id}
              className={valueMap[option.id] ? styles.selected : styles.option}
              onClick={() => handleClick(option)}>
              <p key={option.id}>{option.value}</p>
              {valueMap[option.id] && <CheckIcon className={styles.checkIcon} />}
            </div>
          );
        })}
      </div>
    </Dropdown>
  );
};
