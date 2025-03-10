import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { Option } from '../../types/SelectTypes.ts';

import { SelectSingle } from '../SelectSingle.tsx';

const optionsMock = [
  { id: '1', value: 'Mister' },
  { id: '3', value: 'Laura' }
];
const handleChange = vi.fn();

describe(SelectSingle, () => {
  test('chooses and sets one option', () => {
    const { container, getAllByRole } = render(
      <SelectSingle value={null} onChange={handleChange} options={optionsMock} />
    );

    // expand select options
    fireEvent.click(container.firstChild?.firstChild as Element);

    const options = getAllByRole('option');
    // choose an option
    fireEvent.click(options[0]);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({ id: '1', value: 'Mister' });
  });

  test('handles the state change', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState<Option | null>(null);
      useEffect(() => {
        setValue({ id: '1', value: 'Mister' });
      }, []);
      return value;
    });

    expect(result.current).toEqual({ id: '1', value: 'Mister' });
  });
});
