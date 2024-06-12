import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WayToPayService {
  private baseURL: string = 'http://localhost:8000/api/v1/routes/business/way-to-pay/';

  constructor() {}
}
