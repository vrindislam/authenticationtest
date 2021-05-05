import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  isAuthenticated: false,
  exp: null,
  firstName: '',
  lastName: '',
  id: '',
  isAdmin: false,
};
const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_AUTH_STATUS:
      return action.payload.isAuthenticated ? action.payload : initialState;
    default:
      return state;
  }
};
export default userReducer;
