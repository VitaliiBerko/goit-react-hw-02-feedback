import PropTypes from 'prop-types';
import s from 'components/FeedbackOptions/feedbackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button name="good" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>

    // <>
    //   <button type="button" onClick={onLeaveFeedback}>Good</button>
    //   <button type="button">Neutral</button>
    //   <button type="button">Bad</button>
    // </>
  );
};
