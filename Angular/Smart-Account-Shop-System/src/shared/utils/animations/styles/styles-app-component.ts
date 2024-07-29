import { AnimationStyleMetadata, query, style } from '@angular/animations';

// const initialStyle: AnimationStyleMetadata = style({
//   position: 'relative',
// });

// const resetStyle: AnimationStyleMetadata = style({
//   position: 'absolute',
//   width: '100%',
//   opacity: 0,
// });

// export const initialAppStyle: AnimationStyleMetadata = style({
//   opacity: 0,
// });

// // const initialOutStyle: AnimationStyleMetadata = style({ opacity: 1 });
// export const enterAppStyle: AnimationStyleMetadata = style({
//   opacity: 0,
//   transform: 'translateY(-50px)',
// });

// export const leaveAppStyle: AnimationStyleMetadata = style({
//   opacity: 1,
//   transform: 'scale(1)',
// });

// export const resetAppStyle = [initialStyle, query(':enter,:leave', [resetStyle], { optional: true })];

const initialStyle: AnimationStyleMetadata = style({
  position: 'relative',
});

const resetStyle: AnimationStyleMetadata = style({
  position: 'absolute',
  width: '100%',
});

export const initialAppStyle: AnimationStyleMetadata = style({
  transform: 'scaleX(0)',
  opacity: 1,
});

export const enterAppStyle: AnimationStyleMetadata = style({
  transform: 'scale(0)',
  filter: 'blur(12px)',
  opacity: 0,
});

export const leaveAppStyle: AnimationStyleMetadata = style({
  transform: 'scale(1)',
  filter: 'blur(0.01px)',
});

export const resetAppStyle = [initialStyle, query(':enter,:leave', [resetStyle], { optional: true })];
