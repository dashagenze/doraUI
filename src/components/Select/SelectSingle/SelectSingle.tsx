import {FC} from "react";
import {Option} from "../types/SelectTypes.ts";

export interface ISelectSingle {
  value: Option | null;
  onChange: (value: Option | null) => void;
  options: Option[];
}
export const SelectSingle: FC<ISelectSingle> = ({value, options, onChange}) => {
  const handleClick = (option: Option) => {
    let hasOptionInValue = value?.id === option.id
    if (!hasOptionInValue) {
      onChange(option);
      return
    }
    onChange(null);
  }

  return (
    <div>
      <details>
        <summary>Select one</summary>
        {options.map((option) => {
          return <p key={option.id} onClick={() => handleClick(option)}>{option.value}</p>
        })}
      </details>

    </div>
  );
};
