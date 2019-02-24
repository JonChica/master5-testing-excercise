import * as React from 'react';
import { MemberListPageContainer } from './pageContainer';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { State } from '../../reducers';
import * as mappers from './mappers';
import * as fetchMembersActions from './actions/fetchMembers';

const getMockStore = configureStore();

describe('pages/members/list/pageContainer specs', () => {
  it('should render as expected when passing state', () => {
    // Arrange
    const state = {
      members: [
        {
          id: 1,
          login: 'test login',
          avatar_url: 'test avatar_url',
        },
      ],
    } as State;

    const store = getMockStore(state);

    // Act
    const component = shallow(<MemberListPageContainer />, {
      context: { store },
    });

    // Assert
    expect(component).toMatchSnapshot();
  });

  it('should call to mapMemberListModelToVM when render component', () => {
    // Arrange
    const state = {
      members: [
        {
          id: 1,
          login: 'test login',
          avatar_url: 'test avatar_url',
        },
      ],
    } as State;

    const store = getMockStore(state);

    const mapMemberListModelToVMStub = jest
      .spyOn(mappers, 'mapMemberListModelToVM')
      .mockReturnValue([
        {
          id: 1,
          name: 'test login',
          avatarUrl: 'test avatarUrl',
        },
      ]);

    // Act
    const component = shallow(<MemberListPageContainer />, {
      context: { store },
    });

    // Assert
    expect(mapMemberListModelToVMStub).toHaveBeenCalledWith(state.members);
  });

  it('should call to fetchMembers action creator when render component', () => {
    // Arrange
    const state = {
      members: [
        {
          id: 1,
          login: 'test login',
          avatar_url: 'test avatar_url',
        },
      ],
    } as State;

    const store = getMockStore(state);

    const fetchMembersStub = jest
      .spyOn(fetchMembersActions, 'fetchMembers')
      .mockImplementation(() => ({
        type: 'action type test',
      }));

    // Act
    const component = mount(<MemberListPageContainer />, {
      context: { store },
    });

    // Assert
    expect(fetchMembersStub).toHaveBeenCalled();
  });
});
