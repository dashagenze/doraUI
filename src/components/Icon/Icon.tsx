import { FC, ReactNode } from 'react';
import './styles.scss';
import { Size } from '../../shared/types/size.ts';

interface IIconProps {
  size?: Size;
  component: ReactNode;
}

export const Icon: FC<IIconProps> = ({ component, size = 'middle' }) => {
  return <div className={`${size}Icon`}>{component}</div>;
};
