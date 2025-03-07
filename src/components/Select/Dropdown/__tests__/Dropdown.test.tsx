import { describe, expect, test } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Dropdown } from '../Dropdown.tsx';

describe('Dropdown', () => {
  test('opens and closes info', () => {
    const { container, queryByText } = render(
      <Dropdown switcher={<div>switcher</div>} children={<div>options</div>} />
    );
    const select = container.firstChild?.firstChild as Element;
    const options = queryByText('options');

    expect(queryByText('options')).not.toBeInTheDocument();
    fireEvent.click(select);
    waitFor(() => {
      expect(options).toBeInTheDocument();
    });
  });
});
