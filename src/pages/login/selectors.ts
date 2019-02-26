import { State } from '../reducers';
import { createSelector } from 'reselect';

const getLogin = (state: State) => state.login;

export const getLoginEntity = createSelector(
  getLogin,
  (loginState) => loginState.loginEntity
);

export const getLoginFormErrors = createSelector(
  getLogin,
  (loginState) => loginState.loginFormErrors
);
