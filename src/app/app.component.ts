import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommentService } from './comments/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  comments: string;
  count: number;
  

  ngOnInit() {
    this.count = 0;
  }

  receiveComment($event) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }

  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }

}
