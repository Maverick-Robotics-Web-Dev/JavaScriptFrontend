import { HttpErrorResponse } from '@angular/common/http';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError } from 'rxjs';

export function getall(apiService: any, destroy: DestroyRef) {
  let data: any;
  let httpError: any;
  apiService
    .list()
    .pipe(takeUntilDestroyed(destroy))
    .subscribe({
      next: (response: any) => {
        data = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);

        httpError = error;
      },
    });
  return { data, httpError };
}
