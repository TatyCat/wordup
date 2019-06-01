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
        "Abdicate {aab-duh-kayt}": "(v) to give up a position, right or power.",
        "synonyms": "cede, relinquish, resivn, quit, yield"
      },
    ],
    cardSide: true,
  }

  generateRandomNumber = this.state.greVocab[Math.floor(Math.random() * this.state.greVocab.length)]
  randomizeNewWord = Object.keys(this.generateRandomNumber)[0]
  wordDefinition = `Definition: ${Object.values(this.generateRandomNumber)[0]}`
  wordSynonyms = `Synonyms: ${this.generateRandomNumber["synonyms"]}`

  flipCard = () => {
    this.setState({ cardSide: !this.state.cardSide })
  }

  render() {
    return (
      <>
        <article className="card cardBody ">
          <section className={this.state.cardSide ? "" : "flipped"}>
            <h1 className={this.state.cardSide ? "cardFront" : " cardBack"}>{this.state.cardSide ? this.randomizeNewWord : this.wordDefinition}</h1>
            <p className="cardBack"> {this.state.cardSide ? "" : this.wordSynonyms} </p>

            <button className="btn" onClick={this.flipCard}>FLIP CARD</button>
          </section>

        </article>
      </>
    );
  }
}

export default Words;