import React, { Component } from 'react';

class Words extends Component {
  state = {
    greVocab: [
      {
        "Abase {uh-bays}": "(v) to humble; disgrace.",
        "synonyms": "demean, humiliate "
      },
      {
        "Abate {uh-bayt}": "(v) to reduce in amouhnt, degree or severity.",
        "synonyms": "ebb, lapse, let up, moderate, relent, slacken, subside, wane"
      },
      {
        "Abdicate {aab-duh-kayt}": "to give up a position, right or power.",
        "synonyms": "cede, relinquish, resivn, quit, yield"
      },
    ],
    cardSide: true,
  }

  generateRandomNumber = this.state.greVocab[Math.floor(Math.random() * this.state.greVocab.length)]
  randomizeNewWord = Object.keys(this.generateRandomNumber)[0]
  wordDefinition = this.generateRandomNumber["synonyms"]

  flipCard = () => {
    this.setState({ cardSide: !this.state.cardSide })

  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <article className="card cardBody">
          <section className="">
            <h1>{this.state.cardSide ? this.randomizeNewWord : this.wordDefinition}</h1>

            <button className="btn" onClick={this.flipCard}>FLIP CARD</button>
          </section>

        </article>
      </>
    );
  }
}

export default Words;