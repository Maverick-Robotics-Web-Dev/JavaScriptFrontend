import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { WaytoPayRAllModel } from '@models/business';
import { WayToPayService } from '@services/business';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { getall } from '@utils/wildcards';

@Component({
  selector: 'app-way-to-pay-main',
  standalone: true,
  imports: [AsyncPipe, NavBarComponent],
  templateUrl: './way-to-pay-main.component.html',
  styleUrl: './way-to-pay-main.component.css',
})
export class WayToPayMainComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  private readonly _destroy: DestroyRef = inject(DestroyRef);
  public waytopayAll!: any;
  // public waytopayAll!: WaytoPayRAllModel;
  public httpError!: any;
  // public httpError!: HttpErrorResponse;
  public loading: boolean = true;

  ngOnInit(): void {
    const res = getall(this._apirestService, this._destroy);
    // console.log(typeof res);
    console.log(res);

    // this._apirestService
    //   .list()
    //   .pipe(takeUntilDestroyed(this._destroy))
    //   .subscribe({
    //     next: (data) => {
    //       this.waytopayAll = data;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       this.httpError = error;
    //     },
    //   });
  }

  public retrieve(id: number) {
    this._router.navigate(['/way-to-pay/detail', id]);
  }

  public create() {
    this._router.navigate(['/way-to-pay/create']);
  }

  public update(id: number) {
    this._router.navigate(['/way-to-pay/update', id]);
  }

  public delete(e: Event, id: number) {
    e.preventDefault();
    this._apirestService
      .destroy(id.toString())
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (response) => {
          if (response.ok) {
            console.log(response.msg);
            this._apirestService
              .list()
              .pipe(takeUntilDestroyed(this._destroy))
              .subscribe({
                next: (data) => {
                  this.waytopayAll = data;
                },
                error: (error: HttpErrorResponse) => {
                  this.httpError = error;
                },
              });
          }
        },
        error: (error: HttpErrorResponse) => {
          this.httpError = error;
        },
      });
  }
}
