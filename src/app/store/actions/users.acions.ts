import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{users: UserInterface[]}>());
export const loadUsersError = createAction('[Users] Load Users Error', props<{payload: any}>());