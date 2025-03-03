import { FC } from 'react';
import { ISelectMultiple, SelectMultiple } from './SelectMultiple/SelectMultiple.tsx';
import { ISelectSingle, SelectSingle } from './SelectSingle/SelectSingle.tsx';

export interface ISingleSelect extends ISelectSingle {
  isMultiple: false;
}
export interface IMultiSelect extends ISelectMultiple {
  isMultiple: true;
}
type ISelectProps = ISingleSelect | IMultiSelect;

export const Select: FC<ISelectProps> = (props) => {
  return props.isMultiple ? <SelectMultiple {...props} /> : <SelectSingle {...props} />;
};
