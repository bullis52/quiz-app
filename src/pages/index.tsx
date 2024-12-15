import { GetStaticProps } from 'next';
import questionsJson from '@/config/questions.json';
import { Question } from '@/types/types';
import QuestionComponent from '@/components/QuestionComponent';

export const getStaticProps: GetStaticProps = async () => {
  const { questions } = questionsJson;
  const firstQuestion = questions[0] || null;

  return { props: { question: firstQuestion } };
};

export default function IndexPage({ question }: { question: Question }) {
  return <QuestionComponent question={question} />;
}
