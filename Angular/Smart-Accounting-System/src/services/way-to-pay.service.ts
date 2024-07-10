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
  private state = signal<WaytoPaySignalState>(waytopayDefaultState);
  data: Signal<any> = computed(() => this.state().data);

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
              this.state.set({ data: resp.data, msg: resp.msg, status: 'success', error: {} });
              console.log(this.state());
            }
            this.state.set({ data: resp.data, status: 'success', error: {} });
            console.log(this.state());
          }
        },
        error: (err) => {
          if (err instanceof Error) {
            console.log(`Error ${err}`);
            this.state.set({ data: [], status: 'error', error: err });
          }
          if (err instanceof HttpErrorResponse) {
            // const error = { error: err.error, status: err.status, text: err.statusText, url: err.url };
            this.state.set({ data: [], status: 'error', error: err });
            console.log(this.state());
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
              this.state.set({ data: resp.data, msg: resp.msg, status: 'success', error: {} });
              console.log(this.state());
            } else {
              this.state.set({ data: resp.data, status: 'success', error: {} });
              console.log(this.state());
            }
          }
        },
        error: (err: HttpErrorResponse) => {
          if (err instanceof Error) {
            console.log(`Error ${err}`);
          }
          if (err instanceof HttpErrorResponse) {
            // const error = { error: err.error, status: err.status, text: err.statusText, url: err.url };
            this.state.set({ data: [], status: 'error', error: err });
            console.log(this.state());
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
    let data: Signal<any> = computed(() => this.state().data);
    let msg: Signal<string | undefined> = computed(() => this.state().msg);
    let status: Signal<string> = computed(() => this.state().status);
    let error: Signal<any> = computed(() => this.state().error);
    return { data, msg, status, error };
  }
}
