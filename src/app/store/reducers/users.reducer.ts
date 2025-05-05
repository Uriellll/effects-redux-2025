import { createReducer, on } from '@ngrx/store';
import * as actionsUsers from '../actions';
import { UserInterface } from '../../interfaces/user.interface';

export interface UsersState {
  users: UserInterface[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};
export const usersReducer = createReducer(
  usersInitialState,
  on(actionsUsers.loadUsers, (state) => ({ ...state, loading: true,})),
  on(actionsUsers.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: users,
  })),
  on(actionsUsers.loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error:{
        url:payload.url,
        name: payload.name,
        message:payload.message
    },
  }))
);
