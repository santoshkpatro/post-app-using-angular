import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() element: {
      PostID: string,
      PostTitle: string,
      PostDesc: string
    }

  constructor() { }

  ngOnInit(): void {
  }

}
