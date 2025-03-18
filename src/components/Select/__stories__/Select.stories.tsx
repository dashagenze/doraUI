import { Select as SelectComponent } from '../Select.tsx';
import { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Option } from '../types/SelectTypes.ts';
import { createOptions } from '../__mocks__/createOptions.ts';

type StoryProps = ComponentProps<typeof SelectComponent>;

const meta: Meta<StoryProps> = {
  component: SelectComponent,
  tags: ['autodocs'],
  title: 'Components/Select'
};
export default meta;

export const Multiple: StoryFn<StoryProps> = (args) => {
  const [value, setValue] = useState<Option[]>([]);
  return <SelectComponent {...args} value={value} onChange={setValue} isMultiple={true} />;
};
Multiple.args = {
  options: createOptions(25)
};

export const Single: StoryFn<StoryProps> = (args) => {
  const [value, setValue] = useState<Option | null>(null);
  return <SelectComponent {...args} value={value} onChange={setValue} isMultiple={false} />;
};
Single.args = {
  options: createOptions(25)
};
