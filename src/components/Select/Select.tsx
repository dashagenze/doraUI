import { FC } from 'react';
import { ISelectMultiple, SelectMultiple } from './SelectMultiple/SelectMultiple.tsx';
import { ISelectSingle, SelectSingle } from './SelectSingle/SelectSingle.tsx';

/** Режим выбора одного элемента */
export interface ISingleSelect extends ISelectSingle {
  isMultiple: false;
}

/** Режим выбора нескольких элементов */
export interface IMultiSelect extends ISelectMultiple {
  isMultiple: true;
}

type ISelectProps = ISingleSelect | IMultiSelect;

export const Select: FC<ISelectProps> = (props) => {
  return props.isMultiple ? <SelectMultiple {...props} /> : <SelectSingle {...props} />;
};
