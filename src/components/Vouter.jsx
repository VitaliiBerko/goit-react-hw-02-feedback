import { Component, Fragment } from 'react';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';

export class Vouter extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral} = this.state;
    if (this.countTotalFeedback() > 0) {
      return Math.floor(((good + neutral) / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          {/* <div>
            <button name="good" type="button" onClick={this.onLeaveFeedback}>
              Good
            </button>
            <button name="neutral" type="button" onClick={this.onLeaveFeedback}>
              Neutral
            </button>
            <button name="bad" type="button" onClick={this.onLeaveFeedback}>
              Bad
            </button>
          </div> */}
          <FeedBackOptions 
          // options={"good", "neutral", "bad"}
           onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>

        {this.countTotalFeedback() && <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>}
      </>
    );
  }
}
