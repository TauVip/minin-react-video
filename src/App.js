import React from 'react'
import Quiz from './containers/Quiz/insex'
import Layout from './hoc/Layout'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    )
  }
}
export default App
