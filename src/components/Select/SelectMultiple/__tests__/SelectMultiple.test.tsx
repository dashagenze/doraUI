import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { SelectMultiple } from '../SelectMultiple.tsx';

const optionsMock = [
  { id: '1', value: 'Mister' },
  { id: '3', value: 'Laura' }
];

describe(SelectMultiple, () => {
  test('chooses multiple options', () => {
    const handleChange = vi.fn();
    const { container, getAllByRole } = render(
      <SelectMultiple value={[]} onChange={handleChange} options={optionsMock} />
    );
    // expand select options
    fireEvent.click(container.firstChild?.firstChild as Element);

    const options = getAllByRole('option');
    // choose 2 options
    fireEvent.click(options[0]);
    expect(handleChange).toBeCalledWith([{ id: '1', value: 'Mister' }]);
    fireEvent.click(options[1]);
    expect(handleChange).toBeCalledWith([{ id: '3', value: 'Laura' }]);

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test('displays selected values', () => {
    render(<SelectMultiple value={optionsMock} onChange={() => {}} options={optionsMock} />);
    // options not expanded, only selected values are displayed
    expect(screen.getByText(/laura/i)).toBeInTheDocument();
    expect(screen.getByText(/mister/i)).toBeInTheDocument();
  });

  test('displays placeholder when no values selected', () => {
    render(<SelectMultiple value={[]} onChange={() => {}} options={optionsMock} />);
    expect(screen.getByText(/select some/i)).toBeInTheDocument();
  });
});
