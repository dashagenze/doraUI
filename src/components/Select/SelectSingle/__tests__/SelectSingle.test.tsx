import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { SelectSingle } from '../SelectSingle.tsx';

const optionsMock = [
  { id: '1', value: 'Mister' },
  { id: '3', value: 'Laura' }
];

describe(SelectSingle, () => {
  test('chooses and sets one option', () => {
    const handleChange = vi.fn();

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

  test('displays selected values', () => {
    render(
      <SelectSingle value={{ id: '3', value: 'Laura' }} onChange={() => {}} options={optionsMock} />
    );
    // options not expanded, only selected value is displayed
    expect(screen.getByText(/laura/i)).toBeInTheDocument();
  });

  test('displays placeholder when no values selected', () => {
    render(<SelectSingle value={null} onChange={() => {}} options={optionsMock} />);
    expect(screen.getByText(/select one/i)).toBeInTheDocument();
  });
});
