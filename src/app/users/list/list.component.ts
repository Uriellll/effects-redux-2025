import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent implements OnInit {
  userService = inject(UserService);
  listUsers: UserInterface[] = [];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(res =>{
      this.listUsers =res;
      console.log(this.listUsers);
    })

  }

}
