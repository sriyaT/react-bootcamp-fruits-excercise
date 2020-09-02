import React, { Component } from 'react';
import foods from './food';
import { choice, remove } from './helpers';
import './App.css';

class App extends Component {
  render() {
    //Randomly draw a fruit from the array
    let fruit = choice(foods);

    //Log the message "I'd like one RANDOMFRUIT, please."
    console.log(`I'd like one ${fruit}, please.`);

    //Log the message "Here you go : RANDOMFRUIT"
    console.log(`Here you go : ${fruit}`);

    //Log the message  "Delicious! May I have another?"
    console.log(`Delicious! May I have another?`);

    //remove the fruit from array of fruits
    let remaining = remove(foods, fruit);
    //Log the message "I'm sorry we're all out. We have FRUITSLeft left."
    console.log(
      `I'm sorry we're all out. We have ${foods.length + 1} other fruits left`
    );
    return (
      <div className='container'>
        {foods}
        <p>I'd like one {fruit}, please.</p>
        <p>Here you go : {fruit}</p>
        <p>Delicious! May I have another?</p>
        <p>
          I'm sorry we're all sold out. We have other fruits left. Would you
          want to try any of these {remaining}
        </p>
      </div>
    );
  }
}
export default App;
