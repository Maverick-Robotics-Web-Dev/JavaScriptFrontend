import { animate, AnimationAnimateMetadata, style } from '@angular/animations';

export const enterAnimate: AnimationAnimateMetadata = animate('0.5s', style({ opacity: 1 }));
export const leaveAnimate: AnimationAnimateMetadata = animate('0.2s', style({ opacity: 0 }));
