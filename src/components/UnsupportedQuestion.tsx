import React from 'react';

interface UnsupportedQuestionProps {
  type: string | undefined;
}

const UnsupportedQuestion: React.FC<UnsupportedQuestionProps> = ({ type }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Unsupported Question Type</h1>
      <p>We currently do not support questions of type: {type || 'Unknown'}</p>
    </div>
  );
};

export default UnsupportedQuestion;
