import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { SelectMultiple } from '../SelectMultiple.tsx';

const optionsMock = [
  { id: '1', value: 'Mister' },
  { id: '3', value: 'Laura' }
];
const handleChange = vi.fn();

describe('SelectMultiple', () => {
  test('chooses multiple options', () => {
    const { container, getAllByRole } = render(
      <SelectMultiple value={[]} onChange={handleChange} options={optionsMock} />
    );
    // expand select options
    fireEvent.click(container.firstChild?.firstChild as Element);

    const options = getAllByRole('option');
    // choose 2 options
    fireEvent.click(options[0]);
    fireEvent.click(options[1]);

    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
