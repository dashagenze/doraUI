import { describe, expect, test } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Dropdown } from '../Dropdown.tsx';

describe('Dropdown', () => {
  test('opens and closes info', () => {
    const { container, queryByText } = render(
      <Dropdown switcher={<div>switcher</div>} children={<div>content</div>} />
    );
    const switcher = container.firstChild?.firstChild as Element;
    const content = queryByText('content');

    expect(queryByText('content')).not.toBeInTheDocument();
    fireEvent.click(switcher);
    waitFor(() => {
      expect(content).toBeInTheDocument();
    });
  });
});
