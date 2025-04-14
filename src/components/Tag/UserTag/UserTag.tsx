import { BaseTag } from '../BaseTag/BaseTag.tsx';
import { FC } from 'react';
import '../styles.scss';
import { Avatar } from '../../Avatar/Avatar.tsx';
import { Size } from '../../../shared/types/size.ts';
import { DeleteIcon } from '../../Icon';

interface IUserTag {
  /** Ссылка на картинку аватара */
  avatar?: string;
  /** Размер тега и аватара */
  size?: Size;
  /** Имя пользователя тега */
  name: string;
  /** Цвет фона тега (random из палитры если не указан) */
  color?: string;
}

interface IUserTagWithDelete extends IUserTag {
  /** Доступно для удаления или нет */
  canDelete: true;
  /** Функция вызванная при удалении */
  onDelete: () => void;
}

interface IUserTagNoDelete extends IUserTag {
  /** Доступно для удаления или нет */
  canDelete?: false;
  /** Функция вызванная при удалении */
  onDelete?: never;
}

export type IUserTagProps = IUserTagWithDelete | IUserTagNoDelete;

export const UserTag: FC<IUserTagProps> = ({ avatar, size, name, canDelete, onDelete, color }) => {
  return (
    <BaseTag
      size={size}
      leftContent={<Avatar name={name} src={avatar} size={size} />}
      content={name}
      color={color}
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
