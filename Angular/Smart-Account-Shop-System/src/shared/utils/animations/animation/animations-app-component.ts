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
import { enterAdminStyle, enterStyle, initialAdminStyle, initialRouteStyle, initialStyle, leaveAdminStyle, leaveStyle, resetStyle } from '../styles';
import { enterAdminAnimate, enterAnimate, leaveAdminAnimate, leaveAnimate } from '../animate';

const optionAnimation: AnimationQueryOptions | null = { optional: true };

const resetRouteStyle = [initialRouteStyle, query(':enter,:leave', [resetStyle], optionAnimation)];

export const appScaleAnimation = trigger('routeAppAnimation', [
  transition('homeAdmin<=>*', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      optionAnimation
    ),
    query(':enter', [initialAdminStyle], optionAnimation),
    group([query(':leave', [leaveAdminAnimate], optionAnimation), query(':enter', [enterAdminAnimate], optionAnimation)]),
  ]),
  transition('*<=>*', [
    ...resetRouteStyle,
    query(':enter', [initialStyle], optionAnimation),
    group([query(':leave', [leaveStyle, leaveAnimate], optionAnimation), query(':enter', [enterStyle, enterAnimate], optionAnimation)]),
  ]),
]);
