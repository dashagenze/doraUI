import { FC, ReactNode } from 'react';
import { getRandomColor } from './utils/getRandomColor.ts';
import { tagColors } from './tagColors.ts';
import './styles.scss';
import { Size } from '../../shared/types/size.ts';
import classNames from 'classnames';

interface ITagProps {
  /** Элемент расположенный слева в теге */
  leftContent?: ReactNode;
  /** Элемент расположенный по центру в теге */
  content: ReactNode;
  /** Элемент расположенный справа в теге */
  rightContent?: ReactNode;
  /** Размер тега */
  size?: Size;
}

export const Tag: FC<ITagProps> = ({ rightContent, content, leftContent, size }) => {
  const tagStyles = classNames('box', {
    [`${size}`]: true
  });
  return (
    <div className={tagStyles} style={{ backgroundColor: getRandomColor(tagColors) }}>
      <div>{leftContent}</div>
      <div>{content}</div>
      <div>{rightContent}</div>
    </div>
  );
};
