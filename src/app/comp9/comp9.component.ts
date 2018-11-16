import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp9',
  templateUrl: './comp9.component.html',
  styleUrls: ['./comp9.component.css']
})
export class Comp9Component {

  list = [];

  postHere(){
    this.list.splice(0,0,'Dhiraj');

  }
}
