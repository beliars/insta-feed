import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-section',
  templateUrl: 'feed-section.html'
})
export class FeedSectionComponent {
  @Input() photo;
  private likes = {
    quantity: Math.floor((Math.random() * 100) + 1),
    text: 'Likes',
    touched: false
  };
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  onLike() {
    if(!this.likes.touched) {
      this.likes.touched = true;
      this.likes.quantity++;
    }
    else {
      this.likes.touched = false;
      this.likes.quantity--;
    }
    this.likes.quantity == 1 ? this.likes.text = 'Like' : this.likes.text = 'Likes';
  }
  
}
