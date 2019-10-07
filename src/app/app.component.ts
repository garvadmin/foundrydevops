import { Component, OnInit } from '@angular/core';
// import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // implements OnInit when Auth is used
  title = 'star-admin-angular';
  // public title = 'My Angular App';
  // public isAuthenticated: boolean;

  // async ngOnInit() {
  //   this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  // }

  // constructor(public oktaAuth: OktaAuthService) {
  //   this.oktaAuth.$authenticationState.subscribe(
  //     (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
  //   );
  // }

  // login() {
  //   this.oktaAuth.loginRedirect();
  // }

  // logout() {
  //   this.oktaAuth.logout('/');
  // }
}
