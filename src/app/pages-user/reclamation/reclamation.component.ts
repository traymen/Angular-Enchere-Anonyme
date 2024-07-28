import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Reclamation } from 'src/app/services/models';
import { ReclamationService } from 'src/app/services/services';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  constructor(
    
     private servicereclamtion:ReclamationService
   ) {
   }
   reclamtion: Reclamation = {
    contenu :'' ,
   
    firstname: '',
    gmail: '',
    lastname : '',
    type: 'ProblemeEnchere' 
  };

  onSubmit = () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('Access token not found in local storage');
      return;
    }
  
    const decodedToken: any = jwtDecode(token);
  
   // const userId = decodedToken.sub; // Obtenez l'ID de l'utilisateur à partir du token décodé
    const firstname = decodedToken.given_name;
    const lastname = decodedToken.family_name;
    const gmail = decodedToken.email;
    this.reclamtion.firstname = firstname; 
    this.reclamtion.lastname = lastname; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
    this.reclamtion.gmail = gmail; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
    // Ajoutez l'ID de l'utilisateur à la demande d'enchère
   // console.log(' syes',userId);
    this.servicereclamtion.createReclamation({
      body: this.reclamtion
    })
    .subscribe(
      response => {
  
        console.log(' saved successfully', response);
      },
      error => {
        console.error('Error saving ', error);
      }
    );
  }
}
