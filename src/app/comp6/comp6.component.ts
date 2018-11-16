import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component {
  title = 'Component 6';

  refArr = [{'id': 1, 'post' : 'friday'}];
  list = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      let ref = {'id' : i, 'post' : 'FRIDAY ' + i};

      this.list.push(ref);
    }
  }

}
