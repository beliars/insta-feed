import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

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
  
  constructor(private authService: AuthService, private sessionService: SessionService) {
  }
  
  ngOnInit() {
  }
  
  test() {
    this.sessionService.getAccessToken().subscribe(res => console.log(res));
    this.authService.currentToken$.subscribe(res => console.log(res));
    this.authService.currentUser$.subscribe(res => console.log(res));
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
