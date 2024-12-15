export interface QuestionBase {
  id: string;
  type: 'choice' | 'infoQuestion' | 'input';
  question?: string;
}

export interface ChoiceQuestion extends QuestionBase {
  type: 'choice';
  options: string[];
  next: { [key: string]: string | undefined } | null;
  showInfo?: boolean;
}

export interface InfoQuestion extends QuestionBase {
  type: 'infoQuestion';
  title: string;
  description: string;
  options: null;
  nextOptions: string[];
}

export interface InputQuestion extends QuestionBase {
  type: 'input';
  inputType: string;
  placeholder: null;
  next: string;
}

export type Question = ChoiceQuestion | InfoQuestion | InputQuestion;

export type Answer = {
  answer: string;
  question: string;
};
