import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from './containers/Auth'
import Quiz from './containers/Quiz/insex'
import QuizCreator from './containers/QuizCreator'
import QuizList from './containers/QuizList'
import Layout from './hoc/Layout'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/' component={QuizList} />
        </Switch>
      </Layout>
    )
  }
}
export default App
