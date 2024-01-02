import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={s.statisticsItem}>Good: {good}</li>
    <li className={s.statisticsItem}>Neutral: {neutral}</li>
    <li className={s.statisticsItem}>Bad: {bad}</li>
    <li className={s.statisticsItem}>Total: {total}</li>
    <li className={s.statisticsItem}>
      Positive feedback: {Math.round(positivePercentage)}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
