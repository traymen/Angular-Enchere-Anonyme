import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelss/user';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
//import { AuthenticationRequest } from 'src/app/services/models';
//import { AuthenticationService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token/token.service';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

 // user: User = new User();

 // authRequest: AuthenticationRequest = {email: '', password: ''};
 errorMsg: Array<string> = [];
  constructor(
  //  private router: Router,
  //  private authService: AuthenticationService,
  //  private tokenService: TokenService,
  //  private lesservices: ServicesssService
    private ss: KeycloakService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.ss.init();
    await this.ss.login();
  }
  
  /*
  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (response) => {
        console.log(response)
        this.tokenService.token = response.token as string;
       // this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }
*/

/*
login() {
  this.lesservices.userConnect(this.user)
    .subscribe(
      (response) => {
        console.log('Utilisateur connecté avec succès :', response);
        this.tokenService.token = response.token as string;
        this.router.navigate(['liste-enchere']);
        
       }, // Attendre 3 secondes        },
      (error) => {
        console.error('Erreur lors de la connexion de l\'utilisateur :', error);
       
        
      }
    );
}

  register() {
    this.router.navigate(['register']);
  }
  
*/
}
