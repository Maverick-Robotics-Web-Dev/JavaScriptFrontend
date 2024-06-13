import { Component, OnInit, inject } from '@angular/core';
import { WayToPayService } from '../../../../services/business/way-to-pay.service';
import { WaytoPayDataModel, WaytoPayAllModel, WaytoPayAllEmptyData } from '../../../../models/business/way-to-pay';

@Component({
  selector: 'app-way-to-pay-main',
  standalone: true,
  imports: [],
  templateUrl: './way-to-pay-main.component.html',
  styleUrl: './way-to-pay-main.component.css',
})
export class WayToPayMainComponent implements OnInit {
  waytopayList: WaytoPayAllModel = WaytoPayAllEmptyData;
  // waytopayList: WaytoPayData[] = [];
  private _apirestservice = inject(WayToPayService);

  ngOnInit(): void {
    this._apirestservice.getWaytoPays().subscribe((waytopay: WaytoPayAllModel) => {
      this.waytopayList = waytopay;
    });
  }
}
