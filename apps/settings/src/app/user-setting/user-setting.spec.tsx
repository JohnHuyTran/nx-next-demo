import { render } from '@testing-library/react';

import UserSetting from './user-setting';

describe('UserSetting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSetting />);
    expect(baseElement).toBeTruthy();
  });
});
