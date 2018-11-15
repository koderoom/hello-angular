import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  title = 'Projec Home';


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
