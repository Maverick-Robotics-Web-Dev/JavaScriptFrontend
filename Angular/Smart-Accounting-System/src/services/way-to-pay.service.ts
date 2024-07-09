import { HttpErrorResponse } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WaytoPayCRU, WaytoPayDel, WaytoPayInputData, WaytoPayRAll } from '@interfaces/business';
import { waytopayDefaultState, WaytoPaySignalState } from '@interfaces/signals';
import { BaseService } from '@shared/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService extends BaseService {
  private businessURL: string = `${this.apiBaseURL}/business/way-to-pays/`;
  private _destroy: DestroyRef = inject(DestroyRef);
  private state = signal<WaytoPaySignalState>(waytopayDefaultState);

  constructor() {
    super();
  }

  public list(): void {
    this.httpClient
      .get<WaytoPayRAll>(this.businessURL)
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (data: WaytoPayRAll) => {
          if (data.ok) {
            console.log(data);
          }
        },
        error: (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            console.log(`Error ${err}`);
          }
          if (err instanceof HttpErrorResponse) {
            console.log('Http', err);
          }
        },
      });
  }

  public retrieve(id: string): Observable<WaytoPayCRU> {
    const waytopayRetrieve: Observable<WaytoPayCRU> = this.httpClient.get<WaytoPayCRU>(`${this.businessURL}${id}`);

    return waytopayRetrieve;
  }

  public create(data: WaytoPayInputData): Observable<WaytoPayCRU> {
    const waytopayCreate: Observable<WaytoPayCRU> = this.httpClient.post<WaytoPayCRU>(`${this.businessURL}`, data);

    return waytopayCreate;
  }

  public partial_update(id: string, data: WaytoPayInputData): Observable<WaytoPayCRU> {
    const waytopayUpdate: Observable<WaytoPayCRU> = this.httpClient.patch<WaytoPayCRU>(`${this.businessURL}${id}/`, data);

    return waytopayUpdate;
  }

  public delete(id: string): Observable<WaytoPayDel> {
    const waytopayDelete: Observable<WaytoPayDel> = this.httpClient.delete<WaytoPayDel>(`${this.businessURL}${id}/`);

    return waytopayDelete;
  }
}
