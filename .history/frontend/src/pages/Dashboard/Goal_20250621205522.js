
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal, deleteGoal } from '../../redux/goalSlice';
import './Goal.css';

const Goal = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goal.goals);

  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddGoal = () => {
    if (!title || !targetAmount || !deadline) return;

    dispatch(addGoal({
      id: Date.now(),
      title,
      targetAmount: parseFloat(targetAmount),
      currentAmount: 0,
      deadline,
    }));

    setTitle('');
    setTargetAmount('');
    setDeadline('');
  };

  const handleDelete = (id) => {
    dispatch(deleteGoal(id));
  };

  return (
    <div className="goal-page">
      <h2>My Financial Goals</h2>

      <div className="goal-form">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>

      <div className="goal-list">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-item">
            <h4>{goal.title}</h4>
            <p>Saved: R{goal.currentAmount} / R{goal.targetAmount}</p>
            <p>Deadline: {goal.deadline}</p>
            <progress value={goal.currentAmount} max={goal.targetAmount}></progress>
            <button onClick={() => handleDelete(goal.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goal;
