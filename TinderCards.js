import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    //Piece of code which runs based on a condition - a jacked if statement
    useEffect(() => {//useEffect is a listener - everytime the database changes it listens
       //Where code runs 

       //this will run ONCE when the component (TinderCards) loads, and never again
      const unsubscribe =  database
       .collection('people')
       .onSnapshot((snapshot) => 
           //this function connects to the firebase table (people) - onSnapshot tells react to look at the database and 
           //snapshot.docs - grabs everything in the documents in the people table - .map() loops through the docs (the obj w/ name and url inside) - grabs and sets it to the people array
           setPeople(snapshot.docs.map(doc => doc.data()))
       );

       return () =>{
          //the cleanup -- many listeners can crash app - run cleanups to prevent that - this function detaches the listener in the browser
          unsubscribe();
       }
    }, []);
    // The same as: const people = [];
    // people.push('example') in JS

    // Push to Array in REACT
    // setPeople([...people, 'example']) The (spread operator) ... means to keep whatever was in the array and add to it w/o it, it would overwrite the array 
    return ( 
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                //Always give KEYS in REACT > Allows REACT to efficiently re-render a list, Makes the APP faster
                <TinderCard 
                className="swipe" 
                key={person.name} 
                preventSwipe={['up', 'down']}
                >
                    <div style ={{ backgroundImage: `url(${person.url})`}} 
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
             </div>
        </div>
     );
}
 
export default TinderCards;