import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { SelectMultiple } from '../SelectMultiple.tsx';

const option1 = { id: '1', value: 'Mister' };
const option2 = { id: '3', value: 'Laura' };

describe(SelectMultiple, () => {
  test('chooses multiple options', () => {
    const handleChange = vi.fn();
    const { container, getAllByRole } = render(
      <SelectMultiple value={[]} onChange={handleChange} options={[option1, option2]} />
    );
    // expand select options
    fireEvent.click(container.firstChild?.firstChild as Element);

    const options = getAllByRole('option');
    // choose 2 options
    fireEvent.click(options[0]);
    expect(handleChange).toBeCalledWith([option1]);
    fireEvent.click(options[1]);
    expect(handleChange).toBeCalledWith([option2]);

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test('displays selected values', () => {
    render(
      <SelectMultiple value={[option1, option2]} onChange={() => {}} options={[option1, option2]} />
    );
    // options not expanded, only selected values are displayed
    expect(screen.getByText(option1.value)).toBeInTheDocument();
    expect(screen.getByText(option2.value)).toBeInTheDocument();
  });

  test('displays placeholder when no values selected', () => {
    render(<SelectMultiple value={[]} onChange={() => {}} options={[option1, option2]} />);
    expect(screen.getByText(/select some/i)).toBeInTheDocument();
  });
});
