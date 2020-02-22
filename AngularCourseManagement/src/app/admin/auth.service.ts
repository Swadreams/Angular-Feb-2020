import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState;
  constructor(private appAuth: AngularFireAuth) {
    // authSate to check user session.
    this.authState = this.appAuth.authState;
  }

  sessionExist() {
    return this.appAuth.auth.currentUser;
  }

  login(email: string, password: string) {
    return this.appAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.appAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.appAuth.auth.signOut();
  }
}
