import React from 'react';
import { Answer, Question } from '@/types/types';
import { useRouter } from 'next/router';
import { InfoContainer } from '@/styles/infoContainer';
import { Title } from '@/styles/Title';
import Button from '@/styles/Button';
import { SubTitle } from '@/styles/SubTitle';

interface InfoQuestionProps {
  question: Question;
  answers: Record<string, Answer>;
}

const InfoQuestion: React.FC<InfoQuestionProps> = ({ question, answers }) => {
  const router = useRouter();

  if (question.type !== 'infoQuestion') {
    return <div>Invalid question type for InfoQuestion component.</div>;
  }

  return (
    <InfoContainer>
      <Title color="white">{question.title}</Title>
      <SubTitle color={'white'}>{question.description}</SubTitle>
      <Button
        onClick={() => {
          const previousQuestionId = Object.keys(answers).pop();

          if (!previousQuestionId) {
            router.push('/results');
            return;
          }

          const previousAnswer = answers[previousQuestionId];
          const nextId =
            previousAnswer?.answer === 'Yes'
              ? question.nextOptions?.[0]
              : question.nextOptions?.[1];
          if (nextId) {
            router.push(`/${nextId}`);
          } else {
            router.push('/results');
          }
        }}
      >
        Next
      </Button>
    </InfoContainer>
  );
};

export default InfoQuestion;
