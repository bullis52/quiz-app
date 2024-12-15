import { createSlice } from '@reduxjs/toolkit';
import { Answer } from '@/types/types';

const initialState = {
  answers: {} as Record<string, Answer>,
  dynamicValues: {} as Record<string, string>,
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveAnswer: (state, action) => {
      const { questionId, answer, question } = action.payload;
      state.answers[questionId] = { answer, question };
    },
  },
});

export const { saveAnswer } = surveySlice.actions;
export default surveySlice.reducer;
