import * as Muscles from '../../img/muscles';

export interface IMuscle {
  id: number;
  title: string;
  subtitle: string;
  exercises: string[];
  img: any;
  imgUrl: string;
}

export const muscles: IMuscle[] = [
  {
    id: 1,
    title: 'Chest',
    subtitle: 'Strengthen your pecs with these exercises',
    exercises: [
      'Barbell bench press',
      'Dumbbell fly',
      'Incline bench press',
      'Cable crossover',
    ],
    img: Muscles.muscleChest,
    imgUrl: '../../img/muscles/muscle-abdominals.jpg',
  },
  {
    id: 2,
    title: 'Back',
    subtitle: 'Strengthen your back with these exercises',
    exercises: [
      'Deadlift',
      'Bent-over row',
      'Pull-up',
      'Lat pulldown',
    ],
    img: Muscles.muscleBack,
    imgUrl: '../../img/muscles/muscle-abdominals.jpg',
  },
  {
    id: 3,
    title: 'Arms',
    subtitle: 'Strengthen your arms with these exercises',
    exercises: [
      'Barbell curl',
      'Skullcrusher',
      'Hammer curl',
      'Triceps dip',
    ],
    img: Muscles.muscleArms,
    imgUrl: '../../img/muscles/muscle-abdominals.jpg',
  },
  {
    id: 4,
    title: 'Abdominals',
    subtitle: 'Strengthen your abs with these exercises',
    exercises: [
      'Crunch',
      'Leg raise',
      'Plank',
      'Russian twist',
    ],
    img: Muscles.muscleAbdominals,
    imgUrl: '../../img/muscles/muscle-abdominals.jpg',
  },
  {
    id: 5,
    title: 'Legs',
    subtitle: 'Strengthen your legs with these exercises',
    exercises: [
      'Squat',
      'Deadlift',
      'Leg press',
      'Lunge',
    ],
    img: Muscles.muscleLegs,
    imgUrl: '../../img/muscles/muscle-abdominals.jpg',
  },
  {
    id: 6,
    title: 'Shoulders',
    subtitle: 'Strengthen your shoulders with these exercises',
    exercises: [
      'Military press',
      'Lateral raise',
      'Front raise',
      'Reverse fly',
    ],
    img: Muscles.muscleShoulders,
    imgUrl: '../../img/muscles/muscle-abdominals.jpg',
  },
];