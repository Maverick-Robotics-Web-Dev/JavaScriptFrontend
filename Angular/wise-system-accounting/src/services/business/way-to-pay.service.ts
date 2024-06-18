import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WaytoPayAllModel, WaytoPayModel, WaytoPayInputData } from '../../models/business/way-to-pay';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService {
  private readonly _httpClient: HttpClient = inject(HttpClient);
  private businessURL: string = `${environment.apiBaseURL}/business/way-to-pay`;

  public list(): Observable<WaytoPayAllModel> {
    const waytopaylist: Observable<WaytoPayAllModel> = this._httpClient.get<WaytoPayAllModel>(this.businessURL);

    return waytopaylist;
  }

  public retrieve(id: string): Observable<WaytoPayModel> {
    const waytopayRetrieve: Observable<WaytoPayModel> = this._httpClient.get<WaytoPayModel>(`${this.businessURL}/${id}`);

    return waytopayRetrieve;
  }

  public create(data: WaytoPayInputData): Observable<WaytoPayInputData> {
    const waytopayCreate: Observable<WaytoPayInputData> = this._httpClient.post<WaytoPayInputData>(`${this.businessURL}`, data);

    return waytopayCreate;
  }

  public partial_update(id: string, data: WaytoPayInputData): Observable<WaytoPayInputData> {
    const waytopayUpdate: Observable<WaytoPayInputData> = this._httpClient.patch<WaytoPayInputData>(`${this.businessURL}/${id}`, data);

    return waytopayUpdate;
  }

  // public destroy(id: string);
}
