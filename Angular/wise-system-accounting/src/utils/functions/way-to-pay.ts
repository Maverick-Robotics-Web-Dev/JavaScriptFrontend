import { WayToPayIdComponent } from '../../pages/business/way_to_pa/way-to-pay-id/way-to-pay-id.component';
import { WayToPayMainComponent } from '../../pages/business/way_to_pa/way-to-pay-main/way-to-pay-main.component';

export function waytopaymainComponent(): Promise<typeof WayToPayMainComponent> {
  const waytopayImport = import('../../pages/business/way_to_pa/way-to-pay-main/way-to-pay-main.component');
  const waytopayPromise: Promise<typeof WayToPayMainComponent> = waytopayImport.then((component) => component.WayToPayMainComponent);

  return waytopayPromise;
}

export function waytopayidComponent(): Promise<typeof WayToPayIdComponent> {
  const waytopayImport = import('../../pages/business/way_to_pa/way-to-pay-id/way-to-pay-id.component');
  const waytopayPromise: Promise<typeof WayToPayIdComponent> = waytopayImport.then((component) => component.WayToPayIdComponent);

  return waytopayPromise;
}
