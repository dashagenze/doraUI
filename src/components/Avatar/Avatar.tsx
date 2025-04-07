import { FC, useState } from 'react';
import './styles.scss';
import { Size } from '../../shared/types/size.ts';

interface IAvatarProps {
  /** Ссылка на ресурс изображения аватара */
  src?: string;
  /** Имя пользователя тега */
  name: string;
  /** Форма иконки аватара */
  shape?: 'circle' | 'square';
  /** Размер аватара */
  size?: Size;
}

export const Avatar: FC<IAvatarProps> = ({ src, name, shape = 'circle', size }) => {
  const [errorImage, setErrorImage] = useState(false);

  return (
    <div className={`background ${shape} ${size + 'Avatar'}`}>
      {src && !errorImage ? (
        <img
          src={src}
          alt={name}
          className={`${shape} ${size + 'Avatar'}`}
          onError={() => setErrorImage(true)}
        />
      ) : (
        <span>{name[0]}</span>
      )}
    </div>
  );
};
