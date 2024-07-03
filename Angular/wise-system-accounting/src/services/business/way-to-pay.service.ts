import { DestroyRef, Injectable, WritableSignal, inject, signal } from '@angular/core';
import { EMPTY, Observable, catchError, of } from 'rxjs';

import { BaseService } from '@services/base.service';
import { WaytoPayCUModel, WaytoPayDModel, WaytoPayInputData, WaytoPayRAllModel, WaytoPayRModel, waytopayEmptyAll } from '@models/business';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StateData } from '@models/business/way-to-pay';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService extends BaseService {
  private _destroy: DestroyRef = inject(DestroyRef);
  private businessURL: string = `${this.apiBaseURL}/business/way-to-pays/`;
  dataList: WritableSignal<WaytoPayRAllModel> = signal(waytopayEmptyAll);
  error: WritableSignal<any> = signal({});
  state: WritableSignal<StateData> = signal({ data: [], status: '' });

  public list(): Observable<WaytoPayRAllModel> {
    const waytopaylist: Observable<WaytoPayRAllModel> = this.httpClient.get<WaytoPayRAllModel>(this.businessURL);

    return waytopaylist;
  }

  public retrieve(id: string): Observable<WaytoPayRModel> {
    const waytopayRetrieve: Observable<WaytoPayRModel> = this.httpClient.get<WaytoPayRModel>(`${this.businessURL}${id}`);

    return waytopayRetrieve;
  }

  public create(data: WaytoPayInputData): Observable<WaytoPayCUModel> {
    const waytopayCreate: Observable<WaytoPayCUModel> = this.httpClient.post<WaytoPayCUModel>(`${this.businessURL}`, data);

    return waytopayCreate;
  }

  public partial_update(id: string, data: WaytoPayInputData): Observable<WaytoPayCUModel> {
    const waytopayUpdate: Observable<WaytoPayCUModel> = this.httpClient.patch<WaytoPayCUModel>(`${this.businessURL}${id}/`, data);

    return waytopayUpdate;
  }

  public delete(id: string): Observable<WaytoPayDModel> {
    const waytopayDelete: Observable<WaytoPayDModel> = this.httpClient.delete<WaytoPayDModel>(`${this.businessURL}${id}/`);

    return waytopayDelete;
  }
}
