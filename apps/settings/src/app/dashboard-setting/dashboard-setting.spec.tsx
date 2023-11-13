import { render } from '@testing-library/react';

import DashboardSetting from './dashboard-setting';

describe('DashboardSetting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardSetting />);
    expect(baseElement).toBeTruthy();
  });
  it('should render more than expect', () => {
    const { baseElement } = render(<DashboardSetting />);
    expect(baseElement).toBeTruthy();
  });
});
