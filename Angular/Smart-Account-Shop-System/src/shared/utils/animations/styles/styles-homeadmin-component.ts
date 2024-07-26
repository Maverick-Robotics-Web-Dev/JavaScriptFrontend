import { AnimationStyleMetadata, style } from '@angular/animations';

export const initialAdminStyle: AnimationStyleMetadata = style({
  left: '-100%',
});

// const initialOutStyle: AnimationStyleMetadata = style({ opacity: 1 });
export const enterAdminStyle: AnimationStyleMetadata = style({
  left: '0',
});

export const leaveAdminStyle: AnimationStyleMetadata = style({
  left: '100%',
});
