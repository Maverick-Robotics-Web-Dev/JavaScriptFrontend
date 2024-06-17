import { Component, OnInit, inject } from '@angular/core';
import { WayToPayService } from '../../../../services/business/way-to-pay.service';
import { WaytoPayAllModel, WaytoPayAllEmptyData } from '../../../../models/business/way-to-pay';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-way-to-pay-main',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './way-to-pay-main.component.html',
  styleUrl: './way-to-pay-main.component.css',
})
export class WayToPayMainComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  public waytopayAll!: Observable<WaytoPayAllModel>;
  public httpError!: HttpErrorResponse;

  ngOnInit(): void {
    this.waytopayAll = this._apirestService.getAllWaytoPay().pipe(
      catchError((error: HttpErrorResponse) => {
        this.httpError = error;
        return EMPTY;
      })
    );
  }

  retrieve(id: number) {
    this._router.navigate(['/way-to-pay', id]);
  }
}
