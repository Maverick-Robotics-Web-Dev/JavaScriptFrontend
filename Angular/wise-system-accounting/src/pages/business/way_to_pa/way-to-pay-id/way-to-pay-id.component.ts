import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WayToPayService } from '../../../../services/business/way-to-pay.service';
import { WaytoPayModel, WaytopayEmptyData } from '../../../../models/business/way-to-pay';

@Component({
  selector: 'app-way-to-pay-id',
  standalone: true,
  imports: [],
  templateUrl: './way-to-pay-id.component.html',
  styleUrl: './way-to-pay-id.component.css',
})
export class WayToPayIdComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  public waytopay: WaytoPayModel = WaytopayEmptyData;
  loading: boolean = false;

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this._apirestService.getWaytoPay(params['id']).subscribe((waytopayId: WaytoPayModel) => {
        this.waytopay = waytopayId;
        this.loading = true;
      });
    });
  }
}
