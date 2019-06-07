import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  // enteredTitle = '';
  // enteredContent = '';
  // private mode = 'create';
  // private postId: string;
  // deck: Deck;

  constructor() { }

  ngOnInit() {
  //   this.route.paramMap.subscribe((paramMap: ParamMap) => {
  //     if (paramMap.has('postId')) {
  //       this.mode = 'edit';
  //       this.postId = paramMap.get('postId');
  //       this.service.getPost(this.postId).subscribe(postData => {
  //         this.post = { id: postData._id, title: postData.title, content: postData.content };
  //       });
  //     } else {
  //       this.mode = 'create';
  //       this.postId = null;
  //     }
  //   });
  }

}
