import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';
import { WaytoPayCUModel, WaytoPayDModel, WaytoPayInputData, WaytoPayRAllModel, WaytoPayRModel } from '../../models/business';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService {
  private readonly _httpClient: HttpClient = inject(HttpClient);
  private businessURL: string = `${environment.apiBaseURL}/business/way-to-pay/`;

  public list(): Observable<WaytoPayRAllModel> {
    const waytopaylist: Observable<WaytoPayRAllModel> = this._httpClient.get<WaytoPayRAllModel>(this.businessURL);

    return waytopaylist;
  }

  public retrieve(id: string): Observable<WaytoPayRModel> {
    const waytopayRetrieve: Observable<WaytoPayRModel> = this._httpClient.get<WaytoPayRModel>(`${this.businessURL}/${id}`);

    return waytopayRetrieve;
  }

  public create(data: WaytoPayInputData): Observable<WaytoPayCUModel> {
    console.log(this.businessURL);

    const waytopayCreate: Observable<WaytoPayCUModel> = this._httpClient.post<WaytoPayCUModel>(`${this.businessURL}`, data);

    return waytopayCreate;
  }

  public partial_update(id: string, data: WaytoPayInputData): Observable<WaytoPayCUModel> {
    const waytopayUpdate: Observable<WaytoPayCUModel> = this._httpClient.patch<WaytoPayCUModel>(`${this.businessURL}/${id}`, data);

    return waytopayUpdate;
  }

  public destroy(id: string): Observable<WaytoPayDModel> {
    const waytopayDelete: Observable<WaytoPayDModel> = this._httpClient.delete<WaytoPayDModel>(`${this.businessURL}/${id}`);

    return waytopayDelete;
  }
}
