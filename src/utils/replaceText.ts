import { Answer } from '@/types/types';

export const replacePlaceholders = (
  template: string,
  answers: Record<string, Answer>
): string => {
  const getPlaceholderValue = (placeholder: string): string => {
    const key = placeholder === 'Gender' ? 'gender' : placeholder;
    const matchedAnswer = answers[key]?.answer;
    return matchedAnswer?.toString() || `{${placeholder}}`;
  };

  const placeholders = Array.from(template.matchAll(/{(.*?)}/g)).map(
    (match) => match[1]
  );

  const finalText = placeholders.reduce((updatedTemplate, placeholder) => {
    const value =
      placeholder === 'who have children (if have children)'
        ? answers['single-parent']?.answer === 'Yes'
          ? 'who have children'
          : ''
        : getPlaceholderValue(placeholder);

    return updatedTemplate.replace(`{${placeholder}}`, value);
  }, template);

  return finalText;
};
