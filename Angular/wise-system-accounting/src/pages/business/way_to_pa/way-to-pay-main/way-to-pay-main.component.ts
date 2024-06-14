import { Component, OnInit, inject } from '@angular/core';
import { WayToPayService } from '../../../../services/business/way-to-pay.service';
import { WaytoPayAllModel, WaytoPayAllEmptyData } from '../../../../models/business/way-to-pay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-way-to-pay-main',
  standalone: true,
  imports: [],
  templateUrl: './way-to-pay-main.component.html',
  styleUrl: './way-to-pay-main.component.css',
})
export class WayToPayMainComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  public waytopayList: WaytoPayAllModel = WaytoPayAllEmptyData;

  ngOnInit(): void {
    this._apirestService.getAllWaytoPay().subscribe((waytopay: WaytoPayAllModel) => {
      this.waytopayList = waytopay;
    });
  }

  retrieve(id: number) {
    this._router.navigate(['/way-to-pay', id]);
  }
}
