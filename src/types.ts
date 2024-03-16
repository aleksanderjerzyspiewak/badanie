export interface lesson_0_interface {
  sex: string;
  birth: number;
  dalt: boolean;
  adhd: boolean;
  tired: boolean;
  dys: boolean;
  eye: string;
  clause: boolean;
}
export interface lesson_1_interface {
  time: number;
  falseTry: number;
  isFind: boolean;
}

export interface lesson_2_interface {
  time: number;
  falseTry: number;
  isFind: boolean;
}

export interface lesson_3_interface {
  duration: number;
  tones: number;
}

export interface lesson_4_interface {
  time: number;
  second: number;
}

export interface lesson_5_interface {
  time: number;
  second: number;
  zoom: number;
  position: number;
}

export interface lesson_6_interface {
  time: number;
  second: number;
}

export interface lesson_7_interface {
  time: number;
  second: number;
  zoom: number;
  position: number;
}

export interface lesson_8_interface {
  isCorrect: boolean;
  falseTry: number
  time: number;
}

export interface lesson_9_interface {
  isCorrect: boolean;
  falseTry: number
  time: number;
}

export interface lesson_10_interface {
  selected: number;
}

export interface finale{
  lesson_0: lesson_0_interface;
  lesson_1: lesson_1_interface;
  lesson_2: lesson_2_interface;
  lesson_3: lesson_3_interface;
  lesson_4: lesson_4_interface;
  lesson_5: lesson_5_interface;
  lesson_6: lesson_6_interface;
  lesson_7: lesson_7_interface;
  lesson_8: lesson_8_interface;
  lesson_9: lesson_9_interface;
  lesson_10: lesson_10_interface;
}

export {};
