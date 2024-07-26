import {
  animate,
  AnimationAnimateMetadata,
  AnimationQueryOptions,
  AnimationStyleMetadata,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { enterStyle, initialRouteStyle, initialStyle, leaveStyle, resetStyle } from '../styles';
import { enterAnimate, leaveAnimate } from '../animate';

const optionAnimation: AnimationQueryOptions | null = { optional: true };

const resetRouteStyle = [initialRouteStyle, query(':enter,:leave', [resetStyle], optionAnimation)];

export const appScaleAnimation = trigger('routeAppAnimation', [
  transition('*=>*', [
    ...resetRouteStyle,
    query(':enter', [initialStyle], optionAnimation),
    group([query(':leave', [leaveStyle, leaveAnimate], optionAnimation), query(':enter', [enterStyle, enterAnimate], optionAnimation)]),
  ]),
]);
