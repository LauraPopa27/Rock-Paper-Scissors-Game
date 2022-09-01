import React from 'react';
import './MainGame.css';
import Card from './Card';


function MainGame(props)
{
   
    return (

        <div className='game-container'>
            {
                 props.choices.map((item)=>
                
                    <Card key={item.id}
                     id={item.id}>
                         <h4>{item.name}</h4>
                         <button onClick={()=> props.onGameStart(item.name)}>Choose</button>
                    </Card>
                )
                
            }

            {/* <Card key='1'>
                Rock
            </Card>
            <Card key='2'>
                Paper
            </Card>
            <Card key='3'>
                Scissors
            </Card> */}
            
        </div>
        
    );
}

export default MainGame;