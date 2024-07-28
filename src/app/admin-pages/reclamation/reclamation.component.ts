import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetListReclamationType$Params } from 'src/app/services/fn/reclamation/get-list-reclamation-type';
import { ReponseReclamtion$Params } from 'src/app/services/fn/reclamation/reponse-reclamtion';
import { Reclamation, ReclamationResponse } from 'src/app/services/models';
import { ReclamationService } from 'src/app/services/services';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {

  constructor(private reclamation : ReclamationService , private router: Router)
  { 
 }
 ngOnInit(): void {
   this.loadReclamation();

 }
 
 selectedType!: GetListReclamationType$Params['type'];
 reclamations : ReclamationResponse[] = [];

  message: string = '';



  

  loadReclamation(): void {
    if (this.selectedType) {
      this.reclamation.getListReclamationType({ type: this.selectedType }).subscribe(
        (data: ReclamationResponse[]) => {
          this.reclamations = data;
          if (this.reclamations.length === 0) {
            this.message = "Pas de réclamation disponible dans cette catégorie pour le moment.";
          } else {
            this.message = '';
          }
        },
        (error) => {
          console.log('Erreur lors du chargement des réclamations :', error);
        }
      );
    } else {
      this.reclamation.getListReclamationn().subscribe(
        (data: ReclamationResponse[]) => {
          this.reclamations = data;
          if (this.reclamations.length === 0) {
            this.message = "Pas de réclamation disponible pour le moment.";
          } else {
            this.message = '';
          }
        },
        (error) => {
          console.log('Erreur lors du chargement des réclamations :', error);
        }
      );
    }
  }

  reclamationn: Reclamation = {
    reponse: '',
    idReclamation:0
   
  };
  getreclamatindata(idReclamation:any){
    
    this.reclamationn.idReclamation=idReclamation
  }

  onSubmitt() {
    if (this.reclamationn.idReclamation !== undefined) {
      const params: ReponseReclamtion$Params= {
        idReclamation: this.reclamationn.idReclamation,
        body: this.reclamationn
      };
  
      this.reclamation.reponseReclamtion(params).subscribe({
        next: () => {
          console.log('Enchère modifiée avec succès');
          this.closeModal();
            setTimeout(() => {
              this.router.navigate(['reclamationAdmin']).then(() => {
                location.reload();
              });
            }, 1000); 
  
        },
        error: (err) => {
          console.error('Erreur lors de la modification de l\'enchère', err);
          // Ajoutez ici votre logique d'erreur (affichage de message d'erreur, etc.)
        }
      });
    }
  }
  
  closeModal(): void {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('style', 'display: none');
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop) {
        document.body.removeChild(modalBackdrop);
      }
    }
  }
}
