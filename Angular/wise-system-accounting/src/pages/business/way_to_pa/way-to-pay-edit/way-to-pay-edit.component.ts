import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { WaytoPayRModel } from '../../../../models/business';
import { WayToPayService } from '../../../../services/business';
import { Router } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-way-to-pay-edit',
  standalone: true,
  imports: [],
  templateUrl: './way-to-pay-edit.component.html',
  styleUrl: './way-to-pay-edit.component.css',
})
export class WayToPayEditComponent implements OnInit {
  @Input() id!: string;
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  private readonly _destroy: DestroyRef = inject(DestroyRef);
  public httpError!: HttpErrorResponse;

  ngOnInit(): void {
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      return EMPTY;
    });
    // this._apirestService
    //   .retrieve(this.id)
    //   .pipe(takeUntilDestroyed(this._destroy))
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //     },
    //   });
  }
}
