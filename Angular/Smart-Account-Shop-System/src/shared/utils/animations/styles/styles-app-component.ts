import { AnimationStyleMetadata, style } from '@angular/animations';

export const initialRouteStyle: AnimationStyleMetadata = style({
  position: 'relative',
});

export const resetStyle: AnimationStyleMetadata = style({
  position: 'absolute',
  width: '100%',
  opacity: 0,
});

export const initialStyle: AnimationStyleMetadata = style({
  opacity: 0,
});

// const initialOutStyle: AnimationStyleMetadata = style({ opacity: 1 });
export const enterStyle: AnimationStyleMetadata = style({
  opacity: 0,
  transform: 'translateY(-50px)',
});

export const leaveStyle: AnimationStyleMetadata = style({
  opacity: 1,
  transform: 'scale(1)',
});
