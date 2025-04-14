import { BaseTag } from '../BaseTag/BaseTag.tsx';
import { FC, ReactNode } from 'react';
import '../styles.scss';
import { Size } from '../../../shared/types/size.ts';
import { Icon } from '../../Icon/Icon.tsx';
import { DeleteIcon } from '../../Icon';

interface IDefaultTag {
  /** Ссылка на иконку */
  icon?: ReactNode;
  /** Размер тега */
  size?: Size;
  /** Текст тега */
  text: string;
  /** Цвет фона тега (random из палитры если не указан) */
  color?: string;
}

interface IDefaultTagWithDelete extends IDefaultTag {
  /** Доступно для удаления или нет */
  canDelete: true;
  /** Функция вызванная при удалении */
  onDelete: () => void;
}

interface IDefaultTagNoDelete extends IDefaultTag {
  /** Доступно для удаления или нет */
  canDelete?: false;
  /** Функция вызванная при удалении */
  onDelete?: never;
}

export type IDefaultTagProps = IDefaultTagWithDelete | IDefaultTagNoDelete;

export const DefaultTag: FC<IDefaultTagProps> = ({
  icon,
  size,
  text,
  canDelete,
  onDelete,
  color
}) => {
  return (
    <BaseTag
      size={size}
      color={color}
      leftContent={<Icon children={icon} size={size} />}
      content={text}
      rightContent={
        canDelete ? (
          <div onClick={onDelete}>
            <DeleteIcon className={'deleteIcon'} size={Size.SMALL} />
          </div>
        ) : null
      }
    />
  );
};
