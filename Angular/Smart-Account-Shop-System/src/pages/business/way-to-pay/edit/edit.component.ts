import { JsonPipe } from '@angular/common';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private _formBuilder: FormBuilder = inject(FormBuilder);
  public _apirestService: WayToPayService = inject(WayToPayService);
  public waytopayForm!: FormGroup;

  ngOnInit(): void {
    this._apirestService.updateWaytoPay.set({ data: {}, msg: '', status: '', error: {} });
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
    console.log(this._apirestService.listData().data);
  }
}
