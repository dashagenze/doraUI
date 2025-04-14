import { ComponentProps } from 'react';
import { Icon as IconComponent } from '../Icon.tsx';
import { Meta, StoryFn } from '@storybook/react';
import HeartIcon from '../assets/heart.svg?react';
import StarIcon from '../assets/star.svg?react';
import RocketIcon from '../assets/rocket.svg?react';
import { Size } from '../../../shared/types/size.ts';

type StoryProps = ComponentProps<typeof IconComponent>;

const meta: Meta<StoryProps> = {
  component: IconComponent,
  tags: ['autodocs'],
  title: 'Components/Icon'
};
export default meta;

export const Icon: StoryFn<StoryProps> = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <IconComponent children={<HeartIcon />} size={Size.BIG} />
        <IconComponent children={<HeartIcon />} size={Size.MIDDLE} />
        <IconComponent children={<HeartIcon />} size={Size.SMALL} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <IconComponent children={<StarIcon />} size={Size.BIG} />
        <IconComponent children={<StarIcon />} size={Size.MIDDLE} />
        <IconComponent children={<StarIcon />} size={Size.SMALL} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <IconComponent children={<RocketIcon />} size={Size.BIG} />
        <IconComponent children={<RocketIcon />} size={Size.MIDDLE} />
        <IconComponent children={<RocketIcon />} size={Size.SMALL} />
      </div>
    </>
  );
};
