import { FC } from 'react';
import './styles.scss';
import { Size } from '../../shared/types/size.ts';

interface IAvatarProps {
  /** ссылка на ресурс изображения аватара */
  src?: string;
  /** Имя пользователя тега */
  name: string;
  /** Форма иконки аватара */
  shape?: 'circle' | 'square';
  /** Размер аватара */
  size?: Size;
}

export const Avatar: FC<IAvatarProps> = ({ src, name, shape = 'circle', size = 'middle' }) => {
  return (
    <div className={`background ${shape} ${size}`}>
      {src ? <img src={src} alt={name} className={`${shape} ${size}`} /> : <span>{name[0]}</span>}
    </div>
  );
};
