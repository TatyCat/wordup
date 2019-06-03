import React, { Component } from 'react';
import wordCache from '../data/wordCache.json'

class Words extends Component {
  state = {
    greVocab: [
    ],
    cardSide: true,
    generateWord: {}
  }

  flipCard = () => {
    this.setState({ cardSide: !this.state.cardSide })
  }

  componentWillMount() {
    this.setState({ greVocab: wordCache["greVocab"] })
  }
  componentDidMount() {
    this.setState({ generateWord: this.state.greVocab[Math.floor(Math.random() * this.state.greVocab.length)] })
  }

  renderWord = () => {
    return Object.keys(this.state.generateWord)[0]
  }
  wordDefinition = () => {
    return `Definition: ${Object.values(this.state.generateWord)[0]}`
  }
  wordSynonyms = () => {
    return `Synonyms: ${this.state.generateWord["synonyms"]}`
  }

  render() {
    return (
      <>
        <article className="card cardBody ">
          <section className={this.state.cardSide ? "" : "flipped"}>
            <h1 className={this.state.cardSide ? "cardFront" : " cardBack"}>{this.state.cardSide ? this.renderWord() : this.wordDefinition()}</h1>
            <p className="cardBack"> {this.state.cardSide ? "" : this.wordSynonyms()} </p>
            <button className="btn" onClick={this.flipCard}>FLIP CARD</button>
          </section>
        </article>
      </>
    );
  }
}

export default Words;