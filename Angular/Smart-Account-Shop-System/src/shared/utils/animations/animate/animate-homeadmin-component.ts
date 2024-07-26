import { animate, AnimationAnimateMetadata, style } from '@angular/animations';

export const enterAdminAnimate: AnimationAnimateMetadata = animate('300ms ease-out', style({ left: '0' }));
export const leaveAdminAnimate: AnimationAnimateMetadata = animate('300ms ease-out', style({ left: '100%' }));
