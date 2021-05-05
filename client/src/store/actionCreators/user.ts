import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';

// eslint-disable-next-line import/prefer-default-export
export const authUser = (status: any) => (dispatch: Dispatch<UserAction>) => {
  return dispatch({
    type: UserActionTypes.USER_AUTH_STATUS,
    payload: status,
  });
};
