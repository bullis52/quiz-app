import React from 'react';
import { Question } from '@/types/types';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import InfoQuestion from './InfoQuestion';
import ChoiceQuestion from './ChoiceQuestion';
import InputQuestion from '@/components/InputQuestion';

interface SharedComponentProps {
  question: Question | null;
}

const QuestionComponent: React.FC<SharedComponentProps> = ({ question }) => {
  const answers = useAppSelector((state: RootState) => state.survey.answers);

  if (!question) {
    return <div>Question not found</div>;
  }

  switch (question.type) {
    case 'infoQuestion':
      return <InfoQuestion question={question} answers={answers} />;
    case 'choice':
      return <ChoiceQuestion question={question} answers={answers} />;
    case 'input':
      return <InputQuestion question={question} answers={answers} />;
    default:
      return <div>Question type not found</div>;
  }
};

export default QuestionComponent;
