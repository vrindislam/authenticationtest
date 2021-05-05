export interface UserState {
  isAuthenticated: boolean;
  exp: null | string;
  firstName: string;
  lastName: string;
  id: string;
  isAdmin: false;
}
export enum UserActionTypes {
  USER_AUTH_STATUS = 'USER_AUTH_STATUS',
}
interface CreateUserAction {
  type: UserActionTypes.USER_AUTH_STATUS;
  payload: any;
}

export type UserAction = CreateUserAction;
