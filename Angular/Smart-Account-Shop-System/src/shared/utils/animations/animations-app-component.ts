import { AnimationQueryOptions, AnimationStyleMetadata, query, style, trigger } from '@angular/animations';

const initialRouteStyle: AnimationStyleMetadata = style({ position: 'relative' });
const resetStyle: AnimationStyleMetadata = style({ position: 'absolute', opacity: 0 });
const initialInStyle: AnimationStyleMetadata = style({ opacity: 0 });
const initialOutStyle: AnimationStyleMetadata = style({ opacity: 1 });
const enterInitStyle: AnimationStyleMetadata = style({ opacity: 0, transform: 'translateY(-50px)' });
const enterStyle: AnimationStyleMetadata = style({ opacity: 1, transform: 'translateY(0px)' });
const leaveStyle: AnimationStyleMetadata = style({ opacity: 0 });
const optionAnimation: AnimationQueryOptions | null = { optional: true };

const resetRouteStyle = [initialRouteStyle, query(':enter,:leave', [resetStyle], optionAnimation)];

export const appScaleAnimations = trigger('routeAppAnimations');
