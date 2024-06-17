import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WaytoPayAllModel, WaytoPayModel } from '../../models/business/way-to-pay';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService {
  private readonly _http: HttpClient = inject(HttpClient);
  private businessURL: string = `${environment.apiBaseURL}/business/way-to-pay`;

  getAllWaytoPay(): Observable<WaytoPayAllModel> {
    const waytopays = this._http.get<WaytoPayAllModel>(this.businessURL);

    return waytopays;
  }

  getWaytoPay(id: string): Observable<WaytoPayModel> {
    const waytopay = this._http.get<WaytoPayModel>(`${this.businessURL}/${id}`);
    return waytopay;
  }
}
