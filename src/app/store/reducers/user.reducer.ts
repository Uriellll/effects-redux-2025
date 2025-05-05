import { createReducer, on } from '@ngrx/store';
import * as actionsUsers from '../actions';
import { UserInterface } from '../../interfaces/user.interface';

export interface UserState {
    id: string;
  user: UserInterface | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}
const userInitialState: UserState = {
    id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null,
};
export const userReducer = createReducer(
  userInitialState,
  on(actionsUsers.loadUser, (state, {id}) => ({ ...state, loading: true, id: id})),
  on(actionsUsers.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: user,
  })),
  on(actionsUsers.loadUserError, (state, { payload }) => ({
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
