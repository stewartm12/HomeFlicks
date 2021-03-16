import * as APIUtil from '../util/session_api_util';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SESSION_ERRORS = 'SESSION_ERRORS';

const loginUser = user => {
  return {
    type: LOGIN_USER,
    user
  }
}

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}

const sessionErrors = errors => {
  return {
    type: SESSION_ERRORS,
    errors
  }
}

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => (dispatch(loginUser(user))),
    err => (dispatch(sessionErrors(err.responseJSON))
  ))
  };

export const login = user => dispatch => {
  return APIUtil.login(user).then(user => {
    debugger
    return dispatch(loginUser(user));
  }, err => (
    dispatch(sessionErrors(err.responseJSON))
  ))
  };

export const logout = () => dispatch => {
  return APIUtil.logout().then(user => (
    dispatch(logoutUser())
  ))
  };
