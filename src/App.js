
import React, { Component } from 'react';

const bodyStyle = {
    color:'red',
    margin:'100px',
    background: 'lightblue'

}
const pStyle = {
    background:'lightgreen'
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        sentence: "",
        word: '',
        count: 0,
        occurrence: 0,
        array: []

        };
    }

    inputHandler = (event) => {
        const { sentence, word, array } = this.state;
        array.push(sentence);
        var sen = array[Math.floor(Math.random() * array.length)];
        var sSplit = sen.split(" ");
        this.setState({ count: sSplit.length });
        var cntr = 0;
        for (let i = 0; i < sSplit.length; i++) {
            if (sSplit[i] === word) {
                cntr += 1;
            }
        }
        this.setState({ occurrence: cntr });
    }

    render() {
        const { sentence, word, count, occurrence } = this.state;
        return (
            <div style={bodyStyle}>
                <h1 style={pStyle}>Sentence:</h1> <input placeholder="input sentence here..."onChange={event => this.setState({ sentence: event.target.value })}></input>
                
                <h1 style={pStyle}>Words:</h1> <input placeholder="input words here..." onChange={event => this.setState({ word: event.target.value })}></input>
                <div>
                    <button onClick={event => this.inputHandler(event)}>Count</button></div>
                <div>
                <br/><br/>
                <h2 style={pStyle}>Inputed text:</h2><h2 style={pStyle}> {sentence}</h2></div>
                <div>
                </div>
                <h2 style={pStyle}>words: {count}</h2>
                <div>
                <h2 style={pStyle}>word occurrence: {word} : {occurrence}</h2></div>
                </div>
        ); 
    }
}
export default App;