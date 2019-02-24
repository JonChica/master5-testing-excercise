import * as React from 'react';
import { Header } from './header';
import { shallow } from 'enzyme';

describe('pages/members/list/components/header specs', () => {
  it('should render as expected', () => {
    // Arrange

    // Act
    const component = shallow(<Header />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
