// src/redux/goalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [], 
};

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },
    updateGoalProgress: (state, action) => {
      const { id, amount } = action.payload;
      const goal = state.goals.find(g => g.id === id);
      if (goal) {
        goal.currentAmount += amount;
      }
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter(goal => goal.id !== action.payload);
    },
  },
});

export const { addGoal, updateGoalProgress, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
