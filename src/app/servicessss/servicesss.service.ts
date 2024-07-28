import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelss/user';
import { Observable, map } from 'rxjs';
import { Encheree } from '../modelss/encheree';
import { EnchereResponse } from '../modelss/enchere-response';
import { Participant } from '../modelss/participant';
import { KeycloakService } from '../services/keycloak/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesssService {

  private baseUrl = 'http://localhost:1920/enchere';

  constructor(private http: HttpClient, private keycloakService:KeycloakService) {}


  saveenchere(requestBody: any, accessToken: string): Observable<any> {
    const apiUrl = 'http://localhost:1920/enchere/AjouterEnchere';

    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    return this.http.post(apiUrl, requestBody, { headers });
  }


  getListEnchere(): Observable<EnchereResponse[]>
   {
    return this.http.get<EnchereResponse[]>(this.baseUrl + "/AfficherListEnchere")
  }
  getListEnchereByType(type: string): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(`${this.baseUrl}/AfficherListEnchereByType`, {
      params: { type }
    }).pipe(
      map((enchereList: EnchereResponse[]) => {
        // Filtrer les enchères où prixGagnant n'est pas null
        return enchereList.filter(enchere => enchere.prixGagnant !== null);
      })
    );
  }

  getListEnchere2(): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(this.baseUrl + "/AfficherListEnchere")
      .pipe(
        map((enchereList: EnchereResponse[]) => {
          // Filtrer les enchères où prixGagnant n'est pas null
          return enchereList.filter(enchere => enchere.prixGagnant !== null);
        })
      );
  }


  private apiUrlll = 'http://localhost:1920/enchere/cover';


  uploadEnchereCoverPicture(idEnchere: number, file: File, accessToken: string): Observable<any> 
  {
    const formData = new FormData();
    formData.append('file', file);
  
    const headers = new HttpHeaders({
      'Content-Type': ' multipart/form-data',
      'Authorization': `Bearer ${accessToken}`
    });
  
    return this.http.post(`${this.apiUrlll}/${idEnchere}`, formData, { headers });
  }
  uploadEnchereCoverPicture2(idEnchere: number, file: File): Observable<any> 
  {
    const formData = new FormData();
    formData.append('file', file);
  
    
  
    return this.http.post(`${this.apiUrlll}/${idEnchere}`, formData);
  }

  deleteEnchere(idEnchere: number | undefined, accessToken: string): Observable<any> {
    if (idEnchere === undefined) {
      throw new Error('idEnchere is undefined');
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    return this.http.delete(`${this.baseUrl}/DeleteEnchree?EnchereId=${idEnchere}`, { headers });
  }

  private stripe = 'http://localhost:1920/create-payment-intent'; // URL du backend Spring Boot
  createPaymentIntent(amount: number, productName: string, email: string): Observable<any> {
    return this.http.post<any>(this.stripe, { amount, productName, email });
  }
}

















/*
  baseUrl = "http://localhost:1920";
  constructor(private httpClient: HttpClient) { }

  userConnect(user: User): Observable<any> {
    return this.httpClient.post<User>(this.baseUrl + `/api/v1/auth/authenticate`, user);
  }
  ajoutenchere(enchere: Encheree,httpOptions: any): Observable<any> {
    return this.httpClient.post<Encheree>(this.baseUrl + `/enchere/AjouterEnchere`, Encheree, httpOptions);
  }
  */
 /*
  uploadEnchereCoverPicture(idEnchere: number, file: File, accessToken: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
        });

    return this.http.post(this.apiUrlll + idEnchere, formData, { headers });
  }
  */
 /*
  ajouterEnchere(enchere: Encheree, token: string): Observable<number> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<number>(`${this.baseUrl}/AjouterEnchere`, enchere);
  }
 // , { headers }
    */