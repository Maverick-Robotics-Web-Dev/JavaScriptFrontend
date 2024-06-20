import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WaytoPayRModel } from '../../../../models/business';
import { WayToPayService } from '../../../../services/business';
import { Router } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-way-to-pay-edit',
  standalone: true,
  imports: [],
  templateUrl: './way-to-pay-edit.component.html',
  styleUrl: './way-to-pay-edit.component.css',
})
export class WayToPayEditComponent {
  @Input() id!: string;
  public waytopay$!: Observable<WaytoPayRModel>;
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  public httpError!: HttpErrorResponse;
}
