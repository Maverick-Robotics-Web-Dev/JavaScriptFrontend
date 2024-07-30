import { JsonPipe } from '@angular/common';
import { Component, effect, inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WaytoPayOutputData } from '@interfaces/business';
import { WayToPayService } from '@services/way-to-pay.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  @Input() id!: string;
  public _apirestService: WayToPayService = inject(WayToPayService);
  private _formBuilder: FormBuilder = inject(FormBuilder);
  public waytopayForm!: FormGroup;

  constructor() {
    effect(() => {
      console.log(this._apirestService.retrievetData());
      if (this._apirestService.retrievetData().status == 'success') {
        console.log('Hello');
        this.waytopayForm.patchValue(this._apirestService.retrievetData().data);
      }
    });

    // this.getData();
    // this._apirestService.retrieve(this.id);
    // console.log(this._apirestService.retrievetData());
  }

  ngOnInit(): void {
    // this._apirestService.retrieveWaytoPay.set({ data: {}, msg: '', status: '', error: {} });
    this.getData();
    this.createForm();
  }

  private createForm(): void {
    this.waytopayForm = this._formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      // fk_user_employee: ['', Validators.required],
    });
  }

  private getData(): void {
    this._apirestService.retrieve(this.id);
    // console.log(this._apirestService.retrievetData());
    // this.waytopayForm.patchValue(this._apirestService.retrievetData().data);
  }
}
