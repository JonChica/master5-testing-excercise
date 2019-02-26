import { getLoginEntity, getLoginFormErrors } from './selectors';
import { State } from '../reducers';
import {
  createEmptyLoginEntity,
  createEmptyLoginFormErrors,
} from './viewModel';

describe('pages/login/selectors specs', () => {
  it('should return loginEntity from state', () => {
    // Arrange
    const state = {
      login: {
        loginEntity: { login: 'test login', password: 'test password' },
        loginFormErrors: createEmptyLoginFormErrors(),
      },
    } as State;

    // Act
    const selectorLoginEntity = getLoginEntity(state);

    // Assert
    expect(selectorLoginEntity).toEqual(state.login.loginEntity);
  });

  it('should return loginFormErrors from state', () => {
    // Arrange
    const state = {
      login: {
        loginEntity: createEmptyLoginEntity(),
        loginFormErrors: {
          login: {
            errorMessage: 'test login error',
            key: '',
            succeeded: false,
            type: 'login error',
          },
          password: {
            errorMessage: 'test password error',
            key: '',
            succeeded: false,
            type: 'password error',
          },
        },
      },
    } as State;

    // Act
    const selectorLoginFormErrors = getLoginFormErrors(state);

    // Assert
    expect(selectorLoginFormErrors).toEqual(state.login.loginFormErrors);
  });
});
