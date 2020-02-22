import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private appAuth: AngularFireAuth) {
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
