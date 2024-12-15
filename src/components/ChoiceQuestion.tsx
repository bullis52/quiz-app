import React from 'react';
import { Answer, Question } from '@/types/types';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/redux/hooks';
import { saveAnswer } from '@/redux/slices/surveySlice';
import PageContainer from '@/styles/PageContainer';
import Button from '@/styles/Button';
import { Title } from '@/styles/Title';
import { replacePlaceholders } from '@/utils/replaceText';

interface ChoiceQuestionProps {
  question: Question;
  answers: Record<string, Answer>;
}

const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({
  question,
  answers,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (question.type !== 'choice') {
    return <div>Invalid question type for InfoQuestion component.</div>;
  }

  const dynamicQuestion = replacePlaceholders(question.question || '', answers);

  return (
    <PageContainer>
      <Title color="black">{dynamicQuestion}</Title>
      {question.options?.map((option) => (
        <Button
          key={option}
          onClick={() => {
            const nextId = question.next?.[option];
            dispatch(
              saveAnswer({
                questionId: question.id,
                answer: option,
                question: question.question,
              })
            );
            if (nextId) {
              router.push(`/${nextId}`);
            } else {
              router.push('/results');
            }
          }}
        >
          {option}
        </Button>
      ))}
    </PageContainer>
  );
};

export default ChoiceQuestion;
