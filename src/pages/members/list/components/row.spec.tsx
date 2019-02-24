import * as React from 'react';
import { shallow } from 'enzyme';
import { Row } from './row';

describe('pages/members/list/components/row specs', () => {
  it('should render as expected when passing required properties', () => {
    // Arrange
    const props = {
      member: {
        id: 1,
        name: 'test name',
        avatarUrl: 'test avatarUrl',
      },
    };

    // Act
    const component = shallow(<Row {...props} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
