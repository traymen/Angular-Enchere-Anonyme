/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reclamation } from '../../models/reclamation';

export interface GetAllReclamations$Params {
}

export function getAllReclamations(http: HttpClient, rootUrl: string, params?: GetAllReclamations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reclamation>>> {
  const rb = new RequestBuilder(rootUrl, getAllReclamations.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reclamation>>;
    })
  );
}

getAllReclamations.PATH = '/reclamation';
