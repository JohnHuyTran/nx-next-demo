import { render } from '@testing-library/react';

import HistorySetting from './history-setting';

describe('HistorySetting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HistorySetting />);
    expect(baseElement).toBeTruthy();
  });
});
