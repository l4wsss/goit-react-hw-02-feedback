import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = options => {
    if (options === 'good') {
      setGood(good + 1);
    }
    if (options === 'bad') {
      setBad(bad + 1);
    }
    if (options === 'neutral') {
      setNeutral(neutral + 1);
    }
  };

  const handleReset = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    countTotalFeedback === 0
      ? 0
      : Math.round((good / countTotalFeedback) * 100);
  const feedbackOptions = [`good`, `neutral`, `bad`];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          handleLeaveFeedback={handleLeaveFeedback}
          handleReset={handleReset}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};
