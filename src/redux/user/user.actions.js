import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInStart = (email, password) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
