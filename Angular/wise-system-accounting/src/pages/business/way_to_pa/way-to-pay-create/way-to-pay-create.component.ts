import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WaytoPayInputData } from '../../../../models/business';
import { WayToPayService } from '../../../../services/business';
import { EMPTY, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-way-to-pay-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './way-to-pay-create.component.html',
  styleUrl: './way-to-pay-create.component.css',
})
export class WayToPayCreateComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private waytopayData!: WaytoPayInputData;
  public waytopayForm!: FormGroup;
  public httpError!: HttpErrorResponse;

  ngOnInit(): void {
    this.waytopayForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      fk_user_employee: ['', [Validators.required]],
    });
  }

  public backMain() {
    this._router.navigate(['/way-to-pay']);
  }

  public waytopayCreate(e: Event) {
    e.preventDefault();

    this.waytopayData = this.waytopayForm.value;
    this._apirestService
      .create(this.waytopayData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.httpError = error;
          return EMPTY;
        })
      )
      .subscribe();
    console.log(e);
    console.log(this.waytopayData);
    this.waytopayForm.reset();
    this._router.navigate(['/way-to-pay']);
  }
}
