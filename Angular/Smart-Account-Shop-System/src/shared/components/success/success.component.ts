import { Component, inject, input, InputSignal, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent implements OnInit {
  private timeOut!: any;
  private _router: Router = inject(Router);
  public state: InputSignal<boolean> = input.required();
  public title: InputSignal<string> = input.required();
  public msg: InputSignal<string | undefined> = input.required();

  ngOnInit(): void {
    this.closeWindow();
  }

  private closeWindow(): void {
    this.timeOut = setTimeout(() => {
      this._router.navigate(['/admin/way-to-pay']);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeOut);
  }
}
