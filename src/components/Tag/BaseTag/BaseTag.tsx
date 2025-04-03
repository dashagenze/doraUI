import { FC, ReactNode } from 'react';
import { getRandomColor } from '../utils/getRandomColor.ts';
import { tagColors } from '../tagColors.ts';
import '../styles.scss';
import { Size } from '../../../shared/types/size.ts';

interface IBaseTagProps {
  /** Элемент расположенный слева в теге */
  leftContent?: ReactNode;
  /** Элемент расположенный по центру в теге */
  content: ReactNode;
  /** Элемент расположенный справа в теге */
  rightContent?: ReactNode;
  /** Размер тега */
  size?: Size;
}

export const BaseTag: FC<IBaseTagProps> = ({ rightContent, content, leftContent, size }) => {
  return (
    <div className={`box ${size}`} style={{ backgroundColor: getRandomColor(tagColors) }}>
      <div>{leftContent}</div>
      <div>{content}</div>
      <div>{rightContent}</div>
    </div>
  );
};
