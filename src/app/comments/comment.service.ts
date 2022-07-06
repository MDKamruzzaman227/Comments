import { Injectable, } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { Timestamp } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class CommentService {

  constructor(private http:HttpClient) { }

  private httpGetComments(postId:number){
    return this.http.get<Comment[]>("http://localhost:4200/comment/"+postId)
  }

  private httpPostcomment(comment:Comment){
    return this.http.post<Comment>("http://localhost:4200/comment", comment)
  }

  public getComments(postId:number) {
    this.httpGetComments(postId).subscribe((res) => {return res})
  }

  public postComment(comment:Comment) {
    this.httpPostcomment(comment).subscribe((res) => {return res})
  }
}

class Comment {
  id: number;
  currentDate: Date;
  commentTxt: String;
  userId: number;
  postId: number;
  parentId: number;
  replyComment: Comment[];
}
