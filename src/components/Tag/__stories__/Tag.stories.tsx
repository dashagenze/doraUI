import { ComponentProps } from 'react';
import { Tag as TagComponent } from '../Tag.tsx';
import { Meta, StoryFn } from '@storybook/react';
import ReactIcon from '../../Icon/assets/react.svg?react';
import { TagType } from '../utils/tagTypes.ts';
import { Size } from '../../../shared/types/size.ts';

type StoryProps = ComponentProps<typeof TagComponent>;

const meta: Meta<StoryProps> = {
  component: TagComponent,
  tags: ['autodocs'],
  title: 'Components/Tag'
};
export default meta;

const avatarLink = 'https://placebear.com/300/300';

export const Tag: StoryFn<StoryProps> = () => {
  return (
    <>
      <p>Default Tag</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TagComponent
          type={TagType.DEFAULT}
          size={Size.BIG}
          text={'Tag text'}
          icon={<ReactIcon />}
        />
        <TagComponent
          type={TagType.DEFAULT}
          size={Size.MIDDLE}
          text={'Tag text'}
          icon={<ReactIcon />}
        />
        <TagComponent
          type={TagType.DEFAULT}
          size={Size.SMALL}
          text={'Tag text'}
          icon={<ReactIcon />}
        />
        <TagComponent
          type={TagType.DEFAULT}
          size={Size.SMALL}
          text={'Tag text'}
          icon={<ReactIcon />}
          canDelete={true}
          onDelete={() => {}}
        />
      </div>

      <p>User Tag</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TagComponent type={TagType.USER} size={Size.BIG} avatar={avatarLink} name={'Gregory'} />
        <TagComponent type={TagType.USER} size={Size.MIDDLE} avatar={avatarLink} name={'Gregory'} />
        <TagComponent type={TagType.USER} size={Size.SMALL} avatar={avatarLink} name={'Gregory'} />
        <TagComponent
          type={TagType.USER}
          size={Size.SMALL}
          avatar={avatarLink}
          name={'Gregory'}
          canDelete={true}
          onDelete={() => {}}
        />
      </div>

      <p>User Tag with no avatar</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TagComponent type={TagType.USER} size={Size.MIDDLE} name={'Gregory'} />
      </div>
    </>
  );
};
