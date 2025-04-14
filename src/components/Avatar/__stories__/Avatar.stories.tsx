import { ComponentProps } from 'react';
import { Avatar as AvatarComponent } from '../Avatar.tsx';
import { Meta, StoryFn } from '@storybook/react';
import { Size } from '../../../shared/types/size.ts';
import { Shape } from '../types/shape.ts';

type StoryProps = ComponentProps<typeof AvatarComponent>;

const meta: Meta<StoryProps> = {
  component: AvatarComponent,
  tags: ['autodocs'],
  title: 'Components/Avatar'
};
export default meta;

export const Avatar: StoryFn<StoryProps> = ({ src }) => {
  return (
    <>
      <p>Circle Avatars</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AvatarComponent src={src} name={'Klyle'} size={Size.BIG} />
        <AvatarComponent src={src} name={'Klyle'} size={Size.MIDDLE} />
        <AvatarComponent src={src} name={'Klyle'} size={Size.SMALL} />
      </div>

      <p>Square Avatars</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AvatarComponent src={src} name={'Klyle'} size={Size.BIG} shape={Shape.SQUARE} />
        <AvatarComponent src={src} name={'Klyle'} size={Size.MIDDLE} shape={Shape.SQUARE} />
        <AvatarComponent src={src} name={'Klyle'} size={Size.SMALL} shape={Shape.SQUARE} />
      </div>

      <p>No Image Avatar</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AvatarComponent name={'Klyle'} size={Size.BIG} shape={Shape.SQUARE} />
        <AvatarComponent name={'Klyle'} size={Size.BIG} />
      </div>
    </>
  );
};

Avatar.args = {
  src: 'https://placebear.com/300/300'
};
