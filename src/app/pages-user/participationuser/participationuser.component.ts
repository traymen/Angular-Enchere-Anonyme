import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encheree } from 'src/app/modelss/encheree';
//import { Participant } from 'src/app/modelss/participant';
import { Enchere } from 'src/app/services/models';
import {  ParticipantService } from 'src/app/services/services/participant.service';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { jwtDecode } from 'jwt-decode';
import {Participant} from 'src/app/services/models/participant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-participationuser',
  templateUrl: './participationuser.component.html',
  styleUrls: ['./participationuser.component.css']
})
export class ParticipationuserComponent {
  errorMsg: Array<string> = [];
  

  constructor(
   // private bookService: EnchereService,
    private router: Router,
    private lesservices: ServicesssService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private participantService:ParticipantService
  ) {
  }

idEnch!: any;
ngOnInit(): void {
  this.idEnch = this.route.snapshot.params['idEnchere'] 

}

//participant: Participant = new Participant();

//[(ngModel)]="participant.prix"
//enchere: Encheree = new Encheree();

/*
onSubmit = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    console.error('Access token not found in local storage');
    return;
  }

  const decodedToken: any = jwtDecode(accessToken);
  const userId = decodedToken.sub; // Obtenez l'ID de l'utilisateur à partir du token décodé

  this.participant.createdBy = userId; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
  console.log(' syes',userId);

  this.lesservices.ajouterParticipation(this.participant, this.idEnch, accessToken)
  .subscribe(
    response => {

      console.log(' saved successfully', response);
    },
    error => {
      console.error('Error saving ', error);
    }
  );
}
*/

participant: Participant = {
  prix: 0
 
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
  this.participant.firstname = firstname; 
  this.participant.lastname = lastname; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
  this.participant.gmail = gmail; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
  // Ajoutez l'ID de l'utilisateur à la demande d'enchère
 // console.log(' syes',userId);
  this.participantService.saveParticipation({
    idEnchere: this.idEnch,
    body: this.participant
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
