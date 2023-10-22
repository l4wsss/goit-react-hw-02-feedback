export const FeedbackOptions = ({ options, handleLeaveFeedback, handleReset }) => {
    return (
      <div>
        {options.map(option => (
          <button
            key={option}
            onClick={() => {
              handleLeaveFeedback(option);
            }}
          >{option}</button>
          ))}
          <button onClick={handleReset} >Reset</button>
      </div>
    );
  };