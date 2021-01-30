import AnswerItem from './AnswerItem'
import classes from './AnswersList.module.css'

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswerItem
        key={index}
        answer={answer}
        onAnswerClick={props.onAnswerClick}
        state={props.state && props.state[answer.id]}
      />
    ))}
  </ul>
)
export default AnswersList
