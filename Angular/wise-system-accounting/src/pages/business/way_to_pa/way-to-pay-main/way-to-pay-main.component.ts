import { Component, OnInit, inject } from '@angular/core';
import { WaytoPayRAllModel } from '../../../../models/business/way-to-pay';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NavBarComponent } from '../../../../components/nav-bar/nav-bar.component';
import { WayToPayService } from '../../../../services/business';

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
  public waytopayAll!: Observable<WaytoPayRAllModel>;
  public httpError!: HttpErrorResponse;

  ngOnInit(): void {
    this.waytopayAll = this._apirestService.list().pipe(
      catchError((error: HttpErrorResponse) => {
        this.httpError = error;
        return EMPTY;
      })
    );
  }

  retrieve(id: number) {
    this._router.navigate(['/way-to-pay/detail', id]);
  }

  public create() {
    this._router.navigate(['/way-to-pay/create']);
  }
}
