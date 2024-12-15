import { GetStaticPaths, GetStaticProps } from 'next';
import questionsJson from '@/config/questions.json';
import { Question } from '@/types/types';
import QuestionComponent from '@/components/QuestionComponent';

export const getStaticPaths: GetStaticPaths = async () => {
  const { questions } = questionsJson;
  const paths = questions.slice(1).map((question) => ({
    params: { id: question.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const { questions } = questionsJson;
  const question = questions.find((q) => q.id === id) || null;
  return { props: { question } };
};

export default function QuestionPage({ question }: { question: Question }) {
  return <QuestionComponent question={question} />;
}
