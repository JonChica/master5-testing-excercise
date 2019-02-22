import { fetchMembers } from './fetchMembers';
import reduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as apiMember from '../../../../rest-api/api/member';
import { Member } from '../../../../rest-api/model';
import { actionIds } from './actionIds';

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('pages/members/list/actions/fetchMembers specs', () => {
  it('should call apiMember.fetchMembers', async () => {
    // Arrange
    const fetchMembersStub = jest
      .spyOn(apiMember, 'fetchMembers')
      .mockResolvedValue([]);
    // Act
    const store = getMockStore();
    const fetchedMembers = await store.dispatch<any>(fetchMembers());

    // Assert
    expect(fetchMembersStub).toHaveBeenCalled();
  });

  it(`should dispatch action with type UPDATE_MEMBERS and payload with members
   when it fetch members successfully`, async () => {
    // Arrange
    const members: Member[] = [
      {
        id: 1,
        login: 'test login 1',
        avatar_url: 'test avatar_url 1',
      },
    ];

    const fetchMembersStub = jest
      .spyOn(apiMember, 'fetchMembers')
      .mockResolvedValue(members);

    // Act
    const store = getMockStore();
    const fetchedMembers = await store.dispatch<any>(fetchMembers());

    // Assert
    const expectedAction = store.getActions()[0];
    expect(expectedAction.type).toEqual(actionIds.UPDATE_MEMBERS);
    expect(expectedAction.payload).toEqual(members);
  });

  it('should call console.log when fail request', async () => {
    // Arrange
    const error = 'test error';

    const fetchMembersStub = jest
      .spyOn(apiMember, 'fetchMembers')
      .mockRejectedValue(error);

    const logStub = jest.spyOn(window.console, 'log');

    // Act
    const store = getMockStore();
    const fetchedMembers = await store.dispatch<any>(fetchMembers());

    // Assert
    expect(logStub).toHaveBeenCalledWith(error);
  });
});
