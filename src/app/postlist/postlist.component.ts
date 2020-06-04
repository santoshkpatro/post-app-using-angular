import { Component, OnInit } from '@angular/core';
import { Post } from '../Post'

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Posts -- Array of objects
  posts : Post[] = [
    {
      PostID: '123',
      PostTitle: 'Success',
      PostDesc: 'Can be achieved!!!'
    }, {
      PostID: '234',
      PostTitle: 'Failure',
      PostDesc: 'It depend upon you'
    }
  ]

  postAdd(postData: {postID: string, postTitle: string, postDesc: string}) {
    this.posts.push({
      PostID: postData.postID,
      PostTitle: postData.postTitle,
      PostDesc: postData.postDesc
    })
  }

}
