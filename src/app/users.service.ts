import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get("http://localhost:3000/employees");
  }
  
  getUsers() {
    return [
      {id: '1007', name: 'John', city:'Delhi', salary: '5000' , Dob:new Date("02/24/1997")},
      {id: '1008', name: 'Ryan', city:'Kollam', salary: '3000' , Dob:new Date("08/22/1997")},
      {id: '1009', name: 'Peter', city:'Trivandrum', salary: '2000' , Dob:new Date("03/20/1997")},
      {id: '1010', name: 'Kate', city:'Kundara', salary: '4000' , Dob:new Date("02/18/1997")},
      {id: '1011', name: 'Sapna', city:'Trivandrum', salary: '6000' , Dob:new Date("07/10/1997")},
      {id: '1012', name: 'Vivek', city:'Banglore', salary: '6000' , Dob:new Date("02/21/1997")},
      {id: '1013', name: 'Samson', city:'Gujarath', salary: '8000' , Dob:new Date("02/11/1997")},
      {id: '1014', name: 'Molly', city:'Wayanad', salary: '10000' , Dob:new Date("05/24/1997")}
    ];
  };
}
