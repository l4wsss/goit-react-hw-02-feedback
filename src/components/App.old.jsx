import { Component } from "react"
import {Section} from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics"

export class App extends Component {
  state = {
    good : 0,
    neutral : 0,
    bad : 0,
  } 
  
  handleLeaveFeedback = (type) => {
    this.setState(prevState => ({
      [type]:prevState[type] + 1
    }))  
  }
  
  handleReset = ()  => {
    this.setState({
      good : 0,
      neutral : 0,
      bad : 0,
    })
  }

  render() {
    
    const {good, neutral, bad} = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = countTotalFeedback === 0 ? 0 : Math.round((good / countTotalFeedback) * 100);   
    const feedbackOptions = [`good`, `neutral`, `bad`];

    return (
      <>
        <Section  title="Please leave feedback" >
          <FeedbackOptions options={feedbackOptions} handleLeaveFeedback={this.handleLeaveFeedback} handleReset={this.handleReset} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={countTotalFeedback} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage} />
        </Section>
      </>
    )
  }

};
