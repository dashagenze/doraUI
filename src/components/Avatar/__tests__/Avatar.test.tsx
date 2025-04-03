import { describe, expect, test } from 'vitest';
import { Avatar } from '../Avatar.tsx';
import { render } from '@testing-library/react';

const name = 'avatar';
describe('Avatar', () => {
  test('displays first letter of the name with no image source provided', () => {
    const { getByText } = render(<Avatar name={name} />);
    const firstLetter = getByText(name[0]);
    expect(firstLetter).toBeInTheDocument();
  });
});
