import { DestroyRef, Injectable, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { WaytoPayRAllModel, waytopayEmptyAll } from '@models/business';
import { StateData } from '@models/business/way-to-pay';
import { WayToPayService } from './way-to-pay.service';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class WayYoPayStoreService implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _destroy: DestroyRef = inject(DestroyRef);
  // dataList: WritableSignal<WaytoPayRAllModel> = signal(waytopayEmptyAll);
  // error: WritableSignal<any> = signal({});
  dataList!: WaytoPayRAllModel;
  public error!: HttpErrorResponse;
  state: WritableSignal<StateData> = signal({ data: [], status: '' });

  ngOnInit(): void {
    this.getAll();
    this.getError();
  }

  getAll() {
    this._apirestService
      .list()
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (data: any) => {
          this.state.set({ data, status: 'success' });
        },
        error: (err) => {
          this.state.update((value) => ({ ...value, data: [], status: err }));
        },
      });
  }

  getError() {
    console.log(this.error);

    return this.error;
  }
}
