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
// import { enterAppStyle, initialAdminStyle, initialAppStyle, leaveAppStyle, resetAdminStyle, resetAppStyle } from '../styles';
import { initialAdminStyle, initialAppStyle, resetAdminStyle, resetAppStyle } from '../styles';
import { enterAdminAnimate, enterAppAnimate, leaveAdminAnimate, leaveAppAnimate } from '../animate';
import { enterAppStyle, leaveAppStyle } from '../styles/styles-app-component';

const optionAnimation: AnimationQueryOptions | null = { optional: true };

export const routeAnimation = trigger('routeAnimation', [
  transition('homeAdmin<=>*', [
    ...resetAdminStyle,
    query(':enter', [initialAdminStyle], optionAnimation),
    group([query(':leave', [leaveAdminAnimate], optionAnimation), query(':enter', [enterAdminAnimate], optionAnimation)]),
  ]),
  // transition('*<=>*', [
  //   ...resetAppStyle,
  //   query(':enter', [initialAppStyle], optionAnimation),
  //   group([query(':leave', [leaveAppStyle, leaveAppAnimate], optionAnimation), query(':enter', [enterAppStyle, enterAppAnimate], optionAnimation)]),
  // ]),
  transition('*<=>*', [
    ...resetAppStyle,
    query(':enter', [initialAppStyle], optionAnimation),
    group([query(':leave', [leaveAppAnimate], optionAnimation), query(':enter', [enterAppAnimate], optionAnimation)]),
  ]),
]);
