import { mapMemberListModelToVM } from './mappers';
import * as model from '../../../rest-api/model';
import * as vm from './viewModel';

describe('pages/members/list/mappers specs', () => {
  describe('mapMemberListModelToVM', () => {
    it('should return empty array when passing members equals undefined', () => {
      // Arrange
      const members = undefined;

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result.length).toEqual(0);
    });

    it('should return empty array when passing members equals null', () => {
      // Arrange
      const members = null;

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result.length).toEqual(0);
    });

    it('should return empty array when passing empty members array', () => {
      // Arrange
      const members = [];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result.length).toEqual(0);
    });

    it('should return viewModel array with 1 member data when passing members array with 1 member', () => {
      // Arrange
      const members: model.Member[] = [
        {
          id: 1,
          login: 'test login 1',
          avatar_url: 'test avatar_url 1',
        },
      ];

      // Act
      const result = mapMemberListModelToVM(members);
      const mappedMembers: vm.Member[] = [
        { id: 1, name: 'test login 1', avatarUrl: 'test avatar_url 1' },
      ];

      // Assert
      expect(result).toEqual(mappedMembers);
    });

    it('should return viewModel array with 2 members data when passing members array with 2 member', () => {
      // Arrange
      const members: model.Member[] = [
        {
          id: 1,
          login: 'test login 1',
          avatar_url: 'test avatar_url 1',
        },
        {
          id: 2,
          login: 'test login 2',
          avatar_url: 'test avatar_url 2',
        },
      ];

      // Act
      const result = mapMemberListModelToVM(members);
      const mappedMembers: vm.Member[] = [
        { id: 1, name: 'test login 1', avatarUrl: 'test avatar_url 1' },
        { id: 2, name: 'test login 2', avatarUrl: 'test avatar_url 2' },
      ];

      // Assert
      expect(result).toEqual(mappedMembers);
    });
  });
});
