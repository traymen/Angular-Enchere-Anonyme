import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/services/services';

@Component({
  selector: 'app-historique-reclamation',
  templateUrl: './historique-reclamation.component.html',
  styleUrls: ['./historique-reclamation.component.css']
})
export class HistoriqueReclamationComponent {
  constructor(private servicereclamtion:ReclamationService )
  {  }
 idEnchh!: any;

 ngOnInit(): void {
  
   this.getHistoriqueReclamation()

 }
 public history: any = [];

  getHistoriqueReclamation() {
    this.servicereclamtion.getUserReclamtionHistory().subscribe(res => {
      this.history.push(...res);

      // Tri des coordonnées par moyenne décroissante
    //  this.allcoordonne.sort((a: Coordonne, b: Coordonne) => b.moyenne - a.moyenne);

      console.log(this.history);
    });
  }
}
