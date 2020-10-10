import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';


@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

//creating an array
salespersonlist : SalesPerson[] =[
  new SalesPerson("Anup", "Kumar", "akumar@gmail.com", 5000),
  new SalesPerson("Maya", "Noah", "mnoah@gmail.com", 9000),
  new SalesPerson("divi","tadya", "dtadya@gmail.com", 8000),
  new SalesPerson("nik", "pic","npic@gmail.com", 7900)
];

  constructor() { }

  ngOnInit(): void {
  }

}
