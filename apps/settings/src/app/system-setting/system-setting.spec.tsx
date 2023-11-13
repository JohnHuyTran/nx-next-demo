import { render } from '@testing-library/react';

import SystemSetting from './system-setting';

describe('SystemSetting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SystemSetting />);
    expect(baseElement).toBeTruthy();
  });
});
