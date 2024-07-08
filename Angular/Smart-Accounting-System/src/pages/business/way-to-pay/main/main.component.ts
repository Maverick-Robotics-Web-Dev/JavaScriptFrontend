import { Component, inject, OnInit } from '@angular/core';
import { WayToPayService } from '@services/index';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  private _apirestService: WayToPayService = inject(WayToPayService);

  ngOnInit(): void {
    this._apirestService.list();
  }
}
