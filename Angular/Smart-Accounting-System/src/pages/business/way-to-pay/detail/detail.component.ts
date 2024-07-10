import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, Input, input, OnInit, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WaytoPayOutputData } from '@interfaces/business';
import { WayToPayService } from '@services/index';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  @Input() id!: string;
  private _apirestService: WayToPayService = inject(WayToPayService);
  private _router: Router = inject(Router);
  public waytopayAll!: Signal<WaytoPayOutputData>;
  public msg!: Signal<String | undefined>;
  public status!: Signal<String>;
  public httpError!: Signal<HttpErrorResponse>;

  ngOnInit(): void {
    this._apirestService.retrieve(this.id);
  }
}
