import { Component, AfterViewInit, HostListener } from '@angular/core';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';

@Component({
  selector: 'app-mainadmin',
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.css']
})
export class MainadminComponent {
  constructor(private keycloakService: KeycloakService )
  { 
 }

  logout() {
    this.keycloakService.logout();
  }

account() {
  this.keycloakService.accountManagement();
}

}
