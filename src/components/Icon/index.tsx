import Delete from './assets/clear.svg?react';
import { Icon } from './Icon.tsx';
import { ComponentProps, FC } from 'react';

export const DeleteIcon: FC<Omit<ComponentProps<typeof Icon>, 'children'>> = (props) => {
  return (
    <Icon {...props}>
      <Delete />
    </Icon>
  );
};
