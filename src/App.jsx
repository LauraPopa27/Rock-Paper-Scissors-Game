import React, {useState} from 'react';
import './App.css';
import MainGame from './MainGame';

function App() {

  const [score, setScore]= useState(0);
  const [myScore, setMyScore]= useState(0);
  const [message, setMessage]= useState('');
  const [message1, setMessage1]= useState('');
  const [myChoice, setMyChoice]= useState('');

  const gameChoices= [
    {
      name: 'Rock',
      id: 1,
    },
    {
      name: 'Paper',
      id: 2,
    },
    {
      name: 'Scissors',
      id: 3,
    },
  ];

  const getRandomNumber= (max) => 
  {
    return Math.floor(Math.random()*max);
  } 

  const startGame= (userChoice) =>
  {

    setMyChoice(gameChoices[getRandomNumber(3)].name);
    console.log('user:', userChoice, 'my:', myChoice);

    if(userChoice=== 'Rock' && myChoice=== 'Rock')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage("It's a match!");
    }

    else if(userChoice=== 'Paper' && myChoice=== 'Paper')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage("It's a match!");
    }

    else if(userChoice=== 'Scissors' && myChoice=== 'Scissors')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage("It's a match!");
    }

    else if(userChoice=== 'Scissors' && myChoice=== 'Paper')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage('You win!');
      setScore((prevState)=> prevState+1);
    }

    else if(userChoice=== 'Scissors' && myChoice=== 'Rock')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage('I win!');
      setMyScore((prevState)=> prevState+1);
    }

    else if(userChoice=== 'Paper' && myChoice=== 'Rock')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage('You win!');
      setScore((prevState) => prevState+1);
    }

    else if(userChoice=== 'Paper' && myChoice=== 'Scissors')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage('I win!');
      setMyScore((prevState)=> prevState+1);
    }

    else if(userChoice=== 'Rock' && myChoice=== 'Scissors')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage('You win!');
      setScore((prevState)=> prevState+1);
    }

    else if(userChoice=== 'Rock' && myChoice=== 'Paper')
    {
      setMessage1(`You picked: ${userChoice}. I picked: ${myChoice}.`);
      setMessage('I win!');
      setMyScore((prevState)=> prevState+1);
    }

  }

  return (

    <div className="container">
      <h1>Rock, Paper, Scissors</h1>
      <div className='game-lines'>

                <h3>{message1}</h3>  
                <h5>{message} </h5>
                <p>Your score: <strong>{score}</strong> </p>
                <p>My score: <strong>{myScore}</strong></p>
      </div>

      <MainGame choices={gameChoices} onGameStart={startGame}/>
  
            
    </div>
    
  );
}

export default App;
