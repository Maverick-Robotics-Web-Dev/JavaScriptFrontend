import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WayToPayService } from '../../../../services/business/way-to-pay.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  public formWayToPay!: FormGroup;

  ngOnInit(): void {
    this.formWayToPay = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  backMain() {
    this._router.navigate(['/way-to-pay']);
  }
}
