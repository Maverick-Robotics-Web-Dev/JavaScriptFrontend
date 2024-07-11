import { HttpErrorResponse } from '@angular/common/http';
import { computed, DestroyRef, inject, Injectable, Signal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WaytoPayCRU, WaytoPayDel, WaytoPayInputData, WaytoPayRAll } from '@interfaces/business';
import { waytopayDefaultState, WaytoPaySignalState } from '@interfaces/signals';
import { BaseService } from '@shared/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService extends BaseService {
  private businessURL: string = `${this.apiBaseURL}/business/way-to-pay/`;
  private _destroy: DestroyRef = inject(DestroyRef);
  public listWaytoPay = signal<WaytoPaySignalState>({ data: [], msg: '', status: 'loading', error: {} });
  listData: Signal<any> = computed(() => this.listWaytoPay().data);
  private retrieveWaytoPay = signal<WaytoPaySignalState>({ data: {}, msg: '', status: 'loading', error: {} });

  constructor() {
    super();
  }

  public list(): void {
    this.httpClient
      .get<WaytoPayRAll>(this.businessURL)
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (resp: WaytoPayRAll) => {
          if (resp.ok) {
            if (resp.msg) {
              this.listWaytoPay.set({ data: resp.data, msg: resp.msg, status: 'success', error: {} });
            }
            this.listWaytoPay.set({ data: resp.data, status: 'success', error: {} });
          }
        },
        error: (err) => {
          if (err instanceof Error) {
            console.log(`Error ${err}`);
            this.listWaytoPay.set({ data: [], status: 'error', error: err });
          }
          if (err instanceof HttpErrorResponse) {
            // const error = { error: err.error, status: err.status, text: err.statusText, url: err.url };
            this.listWaytoPay.set({ data: [], status: 'error', error: err });
          }
        },
      });
  }

  public retrieve(id: string): void {
    this.httpClient
      .get<WaytoPayCRU>(`${this.businessURL}${id}`)
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (resp: WaytoPayCRU) => {
          if (resp.ok) {
            if (resp.msg) {
              this.retrieveWaytoPay.set({ data: resp.data, msg: resp.msg, status: 'success', error: {} });
            } else {
              this.retrieveWaytoPay.set({ data: resp.data, status: 'success', error: {} });
            }
          }
        },
        error: (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            console.log(`Error ${err}`);
          }
          if (err instanceof HttpErrorResponse) {
            // const error = { error: err.error, status: err.status, text: err.statusText, url: err.url };
            this.retrieveWaytoPay.set({ data: {}, status: 'error', error: err });
          }
        },
      });
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

  public getState() {
    let listData: Signal<any> = computed(() => this.listWaytoPay().data);
    console.log(listData());

    // let msg: Signal<string | undefined> = computed(() => this.state().msg);
    // let status: Signal<string> = computed(() => this.state().status);
    // let error: Signal<any> = computed(() => this.state().error);
    return { listData };
  }
}
