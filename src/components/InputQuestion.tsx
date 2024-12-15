import React, { useState } from 'react';
import { Answer, Question } from '@/types/types';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/redux/hooks';
import { saveAnswer } from '@/redux/slices/surveySlice';
import PageContainer from '@/styles/PageContainer';
import Button from '@/styles/Button';
import { Title } from '@/styles/Title';
import { StyledInput } from '@/styles/Input';

interface InputQuestionProps {
  question: Question;
  answers: Record<string, Answer>;
}

const InputQuestion: React.FC<InputQuestionProps> = ({ question }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (question.type !== 'input') {
    return <div>Invalid question type for InfoQuestion component.</div>;
  }

  const handleSubmit = () => {
    dispatch(
      saveAnswer({
        questionId: question.id,
        answer: inputValue,
        question: question.question,
      })
    );
    const nextId = question.next;
    if (nextId) {
      router.push(`/${nextId}`);
    } else {
      router.push('/results');
    }
  };

  return (
    <PageContainer>
      <Title>{question.question}</Title>
      <StyledInput
        value={inputValue}
        type={question.inputType}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={!inputValue}>
        Next
      </Button>
    </PageContainer>
  );
};

export default InputQuestion;
