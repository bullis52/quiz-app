import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import PageContainer from '@/styles/PageContainer';
import { Title } from '@/styles/Title';
import React from 'react';
import { StyledList } from '@/styles/StyledList';
import { replacePlaceholders } from '@/utils/replaceText';

export default function ResultsPage() {
  const answers = useAppSelector((state: RootState) => state.survey.answers);

  return (
    <PageContainer>
      <Title>Your Answers</Title>
      <StyledList>
        {Object.entries(answers).map(([key, value]) => (
          <li key={key}>
            <strong>
              {replacePlaceholders(value.question || '', answers)}:
            </strong>
            {value.answer}
          </li>
        ))}
      </StyledList>
    </PageContainer>
  );
}
