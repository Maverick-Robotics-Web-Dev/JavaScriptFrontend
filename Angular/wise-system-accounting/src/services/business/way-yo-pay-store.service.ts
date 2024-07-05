import { DestroyRef, Injectable, WritableSignal, inject, signal } from '@angular/core';
import { WaytoPayRAllModel, waytopayEmptyAll } from '@models/business';
import { StateData } from '@models/business/way-to-pay';
import { WayToPayService } from './way-to-pay.service';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class WayYoPayStoreService {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _destroy: DestroyRef = inject(DestroyRef);
  // dataList: WritableSignal<WaytoPayRAllModel> = signal(waytopayEmptyAll);
  // error: WritableSignal<any> = signal({});
  dataList!: WaytoPayRAllModel;
  public error!: HttpErrorResponse;
  state: WritableSignal<StateData> = signal({ data: [], status: '' });

  constructor() {
    this.getAll();
  }

  getAll() {
    this._apirestService
      .list()
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (data) => {
          this.dataList = data;
        },
        error: (err) => {
          this.error = err;
        },
      });
  }

  getError() {
    console.log(this.error);

    return this.error;
  }
}
