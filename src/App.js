import React, { Component } from 'react'

class App extends Component {
  state = {
    loading: false,
  }

  showLoader = () => {
    this.setState({ loading: true, })
  }

  render() {
    return (
      <>
        <main className="form-container">
          <h1 onClick={this.showLoader} className={this.state.loading ? "textUp" : ""}>WordUp</h1>
          <div className={this.state.loading ? "spinner" : ""}>
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>

        </main>
      </>)
  }
}

export default App
