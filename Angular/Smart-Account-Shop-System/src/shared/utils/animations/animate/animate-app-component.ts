import { animate, AnimationAnimateMetadata, style } from '@angular/animations';

export const enterAnimate: AnimationAnimateMetadata = animate('3s 0s ease', style({ opacity: 1, transform: 'translateY(0)' }));
export const leaveAnimate: AnimationAnimateMetadata = animate('2s 0s ease', style({ opacity: 0, transform: 'scale(0.6)' }));
// animation: name duration timing-function delay iteration-count direction fill-mode;
