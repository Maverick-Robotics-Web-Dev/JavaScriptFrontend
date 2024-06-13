import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WaytoPayModel } from '../../models/business/way-to-pay';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService {
  private _http: HttpClient = inject(HttpClient);
  private baseURL: string = 'http://localhost:8000/api/v1/routes/business/way-to-pay/';

  getWaytoPays(): Observable<WaytoPayModel> {
    const waytopays = this._http.get<WaytoPayModel>(this.baseURL);

    return waytopays;
  }

  getWaytoPay(id: number): Observable<WaytoPayModel> {
    const waytopay = this._http.get<WaytoPayModel>(`${this.baseURL}/${id}}`);

    return waytopay;
  }
}
