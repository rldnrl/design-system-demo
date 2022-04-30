import { render } from '@testing-library/react';

import DesignSystem from './DesignSystem';

describe('DesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSystem />);
    expect(baseElement).toBeTruthy();
  });
});
