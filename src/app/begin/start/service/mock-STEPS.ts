import { Step } from './step';

export const STEPS: Step[] = [
  {
    id: 0,
    header: 'Step One: Brainstorm',
    description: 'Take a few minutes to jot down your ideal life. Try to be specific and don\'t worry,'
    + 'you can always come back and make changes. Focus on what is most important to your well-being'
    + 'and growth.',
    nextStep: 1
  },
  {
    id: 1,
    header: 'Step Two: Establish goals',
    description: 'Choose one or two goals to focus on which you believe will have the most positive '
    + 'impact on your life or which is a prerequisite for some of your bigger goals. Jot down some '
    + 'reasons you want to accomplish this goal. Break down the goals into more and more specific steps '
    + 'that will lead you to accomplishing your goals.',
    nextStep: null
  }
];
