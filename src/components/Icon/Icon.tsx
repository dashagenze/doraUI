import { FC, ReactNode } from 'react';
import './styles.scss';
import { Size } from '../../shared/types/size.ts';

interface IIconProps {
  size?: Size;
  children: ReactNode;
  className?: string;
}

export const Icon: FC<IIconProps> = ({ children, size = Size.MIDDLE, className }) => {
  return <div className={`${size}Icon ${className}`}>{children}</div>;
};
