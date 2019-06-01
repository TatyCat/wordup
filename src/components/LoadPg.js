import React, { Component } from 'react';
import Words from './Words'

class LoadPg extends Component {
  state = {
    loading: true,
  }

  showLoader = () => {
    this.setState({ loading: true, })
    setTimeout(this.hideLoader, 4000)
  }

  hideLoader = () => {
    this.setState({ loading: false, })
  }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2600);
  }

  render() {
    return (
      <main className="form-container">
        {this.state.loading &&
          <>
            <h1 onClick={this.showLoader} className={this.state.loading ? "textUp" : ""}>WordUp</h1>
            <div className={this.state.loading ? "spinner" : ""}>
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          </>
        }

        {!this.state.loading &&
          <Words />
        }
      </main>
    );
  }
}

export default LoadPg;