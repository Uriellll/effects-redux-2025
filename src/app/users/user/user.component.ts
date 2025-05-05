import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUser } from '../../store/actions';
import { UserInterface } from '../../interfaces/user.interface';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf, JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export default class UserComponent implements OnInit{
  
  router = inject(ActivatedRoute);
  store = inject(Store<AppState>);
  user: UserInterface = {id : 0, first_name: '', last_name:'', email: '', avatar:''} ;
  loading: boolean = false;
  error: any;
  ngOnInit(): void {
    
    this.router.params.subscribe(({id}) =>{
      this.store.dispatch(loadUser({id}))
    })

    this.store.select('user').subscribe(({user, loading, error})=>{
      this.user = user;
      this.loading = loading;
      this.error = error;
    })
  }

}
