import { Select as SelectComponent } from '../Select.tsx';
import { ComponentProps, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Option } from '../types/SelectTypes.ts';

type StoryProps = ComponentProps<typeof SelectComponent> & {
  numberOfOptions: number;
};

const meta: Meta<StoryProps> = {
  component: SelectComponent,
  tags: ['autodocs'],
  title: 'Components/Select',
  argTypes: {
    numberOfOptions: {
      control: 'number'
    }
  }
};
export default meta;

export const Multiple: StoryFn<StoryProps> = ({ numberOfOptions = 5, ...args }) => {
  const [arrValue, setArrValue] = useState<Option[]>([]);
  return (
    <SelectComponent
      {...args}
      value={arrValue}
      onChange={setArrValue}
      isMultiple={true}
      options={createOptions(numberOfOptions)}
    />
  );
};

export const Single: StoryFn<StoryProps> = ({ numberOfOptions = 5, ...args }) => {
  const [value, setValue] = useState<Option | null>(null);
  return (
    <SelectComponent
      {...args}
      value={value}
      onChange={setValue}
      isMultiple={false}
      options={createOptions(numberOfOptions)}
    />
  );
};

function createOptions(numberOfOptions: number) {
  return Array(numberOfOptions)
    .fill(null)
    .map((_, index) => {
      return { id: `${index}`, value: `Option ${index + 1}` };
    });
}
