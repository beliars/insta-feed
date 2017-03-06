import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  signInUser(signInData) {
    signInData.username = signInData.username.trim();
    console.log(signInData.username);
    localStorage.setItem('loggedUserData', JSON.stringify(signInData));
  }
  
}