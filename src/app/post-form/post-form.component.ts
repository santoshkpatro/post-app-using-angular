import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postID = '';
  postTitle = '';
  postDesc = '';

  @Output() postCreated = new EventEmitter<{
    postID: string,
    postTitle: string,
    postDesc: string
  }>();

  formSubmit() {
    if (this.postID == '' || this.postTitle == '' || this.postDesc == '') {
      return window.alert('Please enter valid details')
    }

    this.postCreated.emit({
      postID: this.postID,
      postTitle: this.postTitle,
      postDesc: this.postDesc
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
