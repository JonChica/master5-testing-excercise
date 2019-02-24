import { membersReducer } from '../reducers/';
import { MembersState } from './members';
import deepFreeze from 'deep-freeze';
import { actionIds } from '../actions/actionIds';

describe('pages/members/list/reducers/memberReducer spec', () => {
  it('should return initial state when passing undefined state and some action type', () => {
    // Arrange
    const state = undefined;
    const action = { type: 'action type' };

    // Act
    const nextState = membersReducer(state, action);

    // Assert
    expect(nextState).toEqual([]);
  });

  it('should return same state without mutate it when passing state and some action type', () => {
    // Arrange
    const state: MembersState = [
      {
        id: 1,
        login: 'test login 1',
        avatar_url: 'test avatar_url 1',
      },
    ];
    const action = { type: 'action type' };
    deepFreeze(state);

    // Act
    const nextState = membersReducer(state, action);

    // Assert
    expect(nextState[0].id).toEqual(1);
    expect(nextState[0].login).toEqual('test login 1');
    expect(nextState[0].avatar_url).toEqual('test avatar_url 1');
  });

  it(`should return updated state without mutate it when passing state,
   UPDATE_MEMBERS action type and members payload`, () => {
    // Arrange
    const state: MembersState = [
      {
        id: 1,
        login: 'test login 1',
        avatar_url: 'test avatar_url 1',
      },
    ];
    const action = {
      type: actionIds.UPDATE_MEMBERS,
      payload: [
        {
          id: 1,
          login: 'new login 1',
          avatar_url: 'new avatar_url 1',
        },
        {
          id: 2,
          login: 'new login 2',
          avatar_url: 'new avatar_url 2',
        },
      ],
    };
    deepFreeze(state);

    // Act
    const nextState = membersReducer(state, action);

    // Assert
    expect(nextState).toEqual(action.payload);
  });
});
