import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../interfaces/user.interface';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadUsers } from '../../store/actions';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent implements OnInit {
  userService = inject(UserService);
  listUsers: UserInterface[] = [];
  store = inject(Store<AppState>);
  loading:boolean = false;
  error!:any;

  ngOnInit(): void {
    this.store.select('users').subscribe(({users, loading,error}) =>{
      this.listUsers = users;
      this.loading = loading;
      this.error = error;
    })
    this.store.dispatch(loadUsers())
   /*  this.userService.getUsers().subscribe(res =>{
      this.listUsers =res;
      console.log(this.listUsers);
    }) */

  }

}
