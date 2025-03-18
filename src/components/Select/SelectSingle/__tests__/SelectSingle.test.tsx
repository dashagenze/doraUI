import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { SelectSingle } from '../SelectSingle.tsx';

const option1 = { id: '1', value: 'Mister' };
const option2 = { id: '3', value: 'Laura' };

describe(SelectSingle, () => {
  test('chooses and sets one option', () => {
    const handleChange = vi.fn();

    const { container, getAllByRole } = render(
      <SelectSingle value={null} onChange={handleChange} options={[option1, option2]} />
    );

    // expand select options
    fireEvent.click(container.firstChild?.firstChild?.firstChild as Element);

    const options = getAllByRole('option');
    // choose an option
    fireEvent.click(options[0]);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(option1);
  });

  test('displays selected values', () => {
    render(<SelectSingle value={option1} onChange={() => {}} options={[option1, option2]} />);
    // options not expanded, only selected value is displayed
    expect(screen.getByText(option1.value)).toBeInTheDocument();
  });

  test('displays placeholder when no values selected', () => {
    render(<SelectSingle value={null} onChange={() => {}} options={[option1, option2]} />);
    expect(screen.getByText(/select one/i)).toBeInTheDocument();
  });
});
