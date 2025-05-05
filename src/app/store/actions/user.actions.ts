import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../interfaces/user.interface';

export const loadUser = createAction('[User] Load User', props<{id:string}>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{user: UserInterface}>());
export const loadUserError = createAction('[User] Load User Error', props<{payload: any}>());