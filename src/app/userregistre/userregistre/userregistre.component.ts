
  import Keycloak from 'keycloak-js';

import { HttpContext, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encheree } from 'src/app/modelss/encheree';
import { Enchere } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { jwtDecode } from 'jwt-decode';



@Component({
  selector: 'app-userregistre',
  templateUrl: './userregistre.component.html',
  styleUrls: ['./userregistre.component.css']
})
export class UserregistreComponent  {
  

  errorMsg: Array<string> = [];
  /*
  enchereRequest: Enchere = {
    nomProduit: '',
    //descriptionProduit: '',
   // nombreCondidat : 0,
  //  date: '',
  //  image: '',
  //  prix: ''

  };
  */
  enchereRequest : Encheree=new Encheree()

 
  selectedBookCover: any;
  selectedPicture: string | undefined;

  constructor(
    private bookService: EnchereService,
    private router: Router,
    private lesservices: ServicesssService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService
  ) {
  }


 
/*

  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);

    if (this.selectedBookCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
    }
  }



saveBook() {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    console.error('Access token not found in local storage');
    return;
  }

  const decodedToken: any = jwtDecode(accessToken);
  const userId = decodedToken.sub; // Obtenez l'ID de l'utilisateur à partir du token décodé

  this.enchereRequest.createdBy = userId; // Ajoutez l'ID de l'utilisateur à la demande d'enchère

  this.lesservices.saveBook(this.enchereRequest, accessToken)
  /*.subscribe({
    next: (idEnchere) => {
      this.bookService.uploadEnchereCoverPicture({
        'enchere-id': idEnchere,
        body: {
          file: this.selectedBookCover
        }
      }).subscribe({
        next: () => {
         // this.router.navigate(['/books/my-books']);
        }
      });
    },
    error: (err) => {
      console.log(err.error);
      this.errorMsg = err.error.validationErrors;
    }
  });
}

 
  .subscribe(
    response => {
      console.log('Book saved successfully', response);
    },
    error => {
      console.error('Error saving book', error);
    }
  );
}
*/
}