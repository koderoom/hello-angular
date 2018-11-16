import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  title = 'Component 5';
  refArr = [];
  list = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
