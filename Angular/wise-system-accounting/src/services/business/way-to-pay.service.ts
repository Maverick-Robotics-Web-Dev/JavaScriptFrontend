import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WaytoPayAllModel } from '../../models/business/way-to-pay';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService {
  private _http: HttpClient = inject(HttpClient);
  private baseURL: string = 'http://localhost:8000/api/v1/routes/business/way-to-pay/';

  getWaytoPays(): Observable<WaytoPayAllModel> {
    const waytopays = this._http.get<WaytoPayAllModel>(this.baseURL);

    return waytopays;
  }

  getWaytoPay(id: number): Observable<WaytoPayAllModel> {
    const waytopay = this._http.get<WaytoPayAllModel>(`${this.baseURL}/${id}}`);

    return waytopay;
  }
}
