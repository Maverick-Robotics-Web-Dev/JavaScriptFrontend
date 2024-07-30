import { Component, inject, input, InputSignal, OnInit, Signal, signal, WritableSignal } from '@angular/core';
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
  private timeOutModal!: any;
  private _router: Router = inject(Router);
  public state: WritableSignal<boolean> = signal(false);
  public title: InputSignal<string> = input.required();
  public msg: InputSignal<string | undefined> = input.required();

  ngOnInit(): void {
    this.state.set(true);
    this.closeWindow();
  }

  private closeWindow(): void {
    this.timeOutModal = setTimeout(() => {
      this.state.set(false);
    }, 1000);
    this.timeOut = setTimeout(() => {
      this._router.navigate(['/admin/way-to-pay/']);
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeOutModal);
    clearInterval(this.timeOut);
  }
}
