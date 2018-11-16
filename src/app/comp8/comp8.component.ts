import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp8',
  templateUrl: './comp8.component.html',
  styleUrls: ['./comp8.component.css']
})
export class Comp8Component  {
  title = 'Component 8';
  post = '';
  postList = [];

  /** MEMBER FUNCTION */
  postHere() {

    const postObject = {};
    postObject['like'] = 0;
    postObject['dislike'] = 0;
    postObject['post'] = this.post;
    
    this.postList.splice(0, 0, postObject);

    this.post = '';
  }


  likeCount(item) {
    item.like += 1;
  }
}
