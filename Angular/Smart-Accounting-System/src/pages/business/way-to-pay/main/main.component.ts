import { HttpErrorResponse } from '@angular/common/http';
import { Component, DestroyRef, effect, inject, OnInit, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { WaytoPayOutputData } from '@interfaces/business';
import { WayToPayService } from '@services/index';
import { EditComponent } from '@pages/business/way-to-pay/edit';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  public waytopayAll!: any;
  public waytopayAllT!: WaytoPayOutputData[];
  // public msg = this._apirestService.msg();
  // public status = this._apirestService.status();
  // public httpError = this._apirestService.error();

  ngOnInit(): void {
    this._apirestService.list();
  }

  // private getList(): void {
  //   this._apirestService.list(this._destroy);
  // }

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
