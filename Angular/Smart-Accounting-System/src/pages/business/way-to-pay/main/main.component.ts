import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { WaytoPayOutputData } from '@interfaces/business';
import { WayToPayService } from '@services/index';
import { EditComponent } from '@pages/business/way-to-pay/edit';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  public waytopayAll!: Signal<WaytoPayOutputData[]>;
  public msg!: Signal<String | undefined>;
  public status!: Signal<String>;
  public httpError!: Signal<HttpErrorResponse>;

  ngOnInit(): void {
    this.getList();
  }

  private getList(): void {
    this._apirestService.list();
    let { data, msg, status, error } = this._apirestService.getState();
    this.waytopayAll = data;
    this.msg = msg;
    this.status = status;
    this.httpError = error;
    console.log(data());
  }

  public retrieve(e: Event, id: number) {
    e.preventDefault();
    this._router.navigate(['/admin/way-to-pay/detail', id]);
  }

  public create() {
    this._router.navigate(['/admin/way-to-pay/create']);
  }

  public update(e: Event, id: number) {
    e.preventDefault();
    this._router.navigate(['/admin/way-to-pay/update', id]);
  }
}
