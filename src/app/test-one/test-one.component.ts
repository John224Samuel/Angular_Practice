import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {

  Users!:any[];
  constructor(private userservice: UsersService) {}

  ngOnInit(): void {
    this.Users = this.userservice.getUsers();
  }
title = "hell0";
}
