import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnchereResponse } from 'src/app/modelss/enchere-response';
import { Encheree } from 'src/app/modelss/encheree';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';

@Component({
  selector: 'app-liste-enchere',
  templateUrl: './liste-enchere.component.html',
  styleUrls: ['./liste-enchere.component.css']
})
export class ListeEnchereComponent {
  constructor(private lesservices: ServicesssService, private router: Router)
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
    const url = '/ajout-enchere/' + enchere.idEnchere;
    console.log("Redirection URL:", url);
    this.router.navigateByUrl(url);
  }

}
