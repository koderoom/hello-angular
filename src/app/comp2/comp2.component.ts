import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component  {

  id = 1;
  name = 'CDAC';
  location = 'Kharghar';
  capital = false;

  mumbaiRef = {
    'star' : 'Aamir',
    'superstar' : 'Salman',
    'movie' : 'TOH'
  };


}
