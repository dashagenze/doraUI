import { Dropdown as DropdownComponent } from '../Dropdown.tsx';
import { ComponentProps } from 'react';
import { Meta, StoryFn } from '@storybook/react';

type StoryProps = ComponentProps<typeof DropdownComponent>;

const meta: Meta<StoryProps> = {
  component: DropdownComponent,
  tags: ['autodocs'],
  title: 'Components/Dropdown'
};
export default meta;

export const Dropdown: StoryFn<StoryProps> = (args) => {
  return (
    <DropdownComponent {...args}>
      <div>I am content!!</div>
    </DropdownComponent>
  );
};

Dropdown.args = {
  switcher: <button type={'button'}>Me switcher!!</button>
};
