import { BaseTag } from '../BaseTag/BaseTag.tsx';
import { FC, ReactNode } from 'react';
import Delete from '../../../assets/clear.svg?react';
import '../styles.scss';
import { Size } from '../../../shared/types/size.ts';

interface IDefaultTag {
  /** Ссылка на иконку */
  icon?: ReactNode;
  /** Размер тега */
  size?: Size;
  /** Текст тега */
  text: string;
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

export const DefaultTag: FC<IDefaultTagProps> = ({ icon, size, text, canDelete, onDelete }) => {
  return (
    <BaseTag
      size={size}
      leftContent={icon ?? null}
      content={text}
      rightContent={
        canDelete ? (
          <div onClick={onDelete}>
            <Delete className={'deleteIcon'} />
          </div>
        ) : null
      }
    />
  );
};
