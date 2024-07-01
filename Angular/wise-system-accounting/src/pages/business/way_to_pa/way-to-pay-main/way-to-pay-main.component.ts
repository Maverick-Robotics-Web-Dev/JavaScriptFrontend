import { Component, DestroyRef, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { WaytoPayRAllModel } from '@models/business';
import { WayToPayService } from '@services/business';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  public waytopayAll!: WaytoPayRAllModel;
  public httpError!: HttpErrorResponse;
  public loading: boolean = true;

  ngOnInit(): void {
    this.getall();
  }

  private getall() {
    this._apirestService
      .list()
      .pipe(takeUntilDestroyed(this._destroy))
      .subscribe({
        next: (data) => {
          this.waytopayAll = data;
        },
        error: (err) => {
          this.httpError = err;
        },
      });
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
            this.getall();
          }
        },
        error: (error: HttpErrorResponse) => {
          this.httpError = error;
        },
      });
  }
}
