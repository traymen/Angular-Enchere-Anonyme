import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnchereResponse } from 'src/app/modelss/enchere-response';
import { Encheree } from 'src/app/modelss/encheree';
import { AddFavorite$Params } from 'src/app/services/fn/favoris/add-favorite';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { Enchere, Favoris } from 'src/app/services/models';
import { FavorisService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
@Component({
  selector: 'app-liste-enchere-user',
  templateUrl: './liste-enchere-user.component.html',
  styleUrls: ['./liste-enchere-user.component.css']
})
export class ListeEnchereUserComponent {
  constructor( private serviceFavoris : FavorisService, private lesservices: ServicesssService, private router: Router,private keycloakService: KeycloakService)
  { this.enchereList = [];
 }
 ngOnInit(): void {
   this.loadEncheres();

 //  this.listeEnchere();
 }
 /*
 enchereList: any[] = [];

 listeEnchere(): void {
   this.lesservices.getListEnchere().subscribe(data => {
       console.log(data)
     this.enchereList.push(...data)
   });
 }
 */


 //private _book: BookResponse = {};
 enchereList: EnchereResponse[];
/*
 get bookCover(): string | undefined {
   if (this.enchereList.image) {
     return 'data:image/jpg;base64,' + this.enchereList.image

  }
  return 'https://source.unsplash.com/user/';

 }
 */

 loadEncheres() {
   this.lesservices.getListEnchere().subscribe(
     (data: EnchereResponse[]) => {
       this.enchereList = data;
     },
     (error) => {
       console.log('Erreur lors du chargement des enchères :', error);
     }
   );
 }




 navigateByIdEnchere(enchere: any) {
   console.log("Enchere:", enchere);
   const url = '/user-participate/' + enchere.idEnchere;
   console.log("Redirection URL:", url);
   this.router.navigateByUrl(url);
 }

 logout() {
  this.keycloakService.logout();
}

favoris : Enchere ={
  idEnchere:0
};

  
   showSuccess: boolean = false;

   addToFavorites(idEnchere: any) {
    this.favoris.idEnchere = idEnchere;
    console.log(this.favoris);
  
    if (this.favoris.idEnchere !== undefined) {
      const params: AddFavorite$Params = {
        idEnchere: this.favoris.idEnchere
      };
  
      this.serviceFavoris.addFavorite(params).subscribe({
        next: () => {
          this.showSuccess = true; // Affiche la fenêtre de succès
                setTimeout(() => {
                  this.showSuccess = false;
                }, 3000);

          console.log('Enchère ajoutée aux favoris avec succès');
          // Ajoutez ici les actions supplémentaires si nécessaire
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'enchère aux favoris:', err);
        }
      });
    } else {
      console.warn('L\'ID de l\'enchère n\'est pas défini.');
    }
  }
  
  
/*
  getDataEtAjouter(): void {
    this.getdata();
    this.onSubmit();
  }
*/
}
