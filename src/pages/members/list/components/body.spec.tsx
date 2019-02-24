import * as React from 'react';
import { shallow } from 'enzyme';
import { Row } from './row';
import { Body } from './body';

describe('pages/members/list/components/body specs', () => {
  it('should render as expected when passing required properties', () => {
    // Arrange
    const props = {
      members: [
        {
          id: 1,
          name: 'test name 1',
          avatarUrl: 'test avatarUrl 1',
        },
        {
          id: 2,
          name: 'test name 2',
          avatarUrl: 'test avatarUrl 2',
        },
      ],
    };

    // Act
    const component = shallow(<Body {...props} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
