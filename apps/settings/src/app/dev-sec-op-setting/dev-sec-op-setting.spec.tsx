import { render } from '@testing-library/react';

import DevSecOpSetting from './dev-sec-op-setting';

describe('DevSecOpSetting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DevSecOpSetting />);
    expect(baseElement).toBeTruthy();
  });
});
