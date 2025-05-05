import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import * as usersActions from "../actions";
import { catchError, map, mergeMap, of} from "rxjs";
import { UserService } from "../../services/user.service";

@Injectable()
export class UserEffects{
    actions$ = inject(Actions)
    usersService = inject(UserService);

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.loadUser),
            mergeMap(
                (action)=> this.usersService.getUserById(action.id)
                .pipe(
                    map(user => usersActions.loadUserSuccess({user})),
                    catchError(err => of(usersActions.loadUserError({payload:err})))
                )
            )
        )
    )
}