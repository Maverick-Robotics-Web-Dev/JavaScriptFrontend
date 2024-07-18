import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent implements OnInit {
  private timeOut!: any;
  private _router: Router = inject(Router);
  public title: InputSignal<string> = input.required<string>();
  public msg: InputSignal<string> = input.required<string>();

  ngOnInit(): void {
    this.closeWindow();
  }

  private closeWindow(): void {
    this.timeOut = setTimeout(() => {
      this._router.navigate(['/admin/way-to-pay']);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeOut);
  }
}
