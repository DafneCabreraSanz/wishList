import './App.css'
import WishInput from './WishInput/WishInput.jsx'
import WishList from './WishList/WishList';
import { useState } from 'react';

let initial_wishes = [
  { id: 0,
    text: 'Been millionaire', 
    completed: false },
  { id: 1,
    text: 'Pass this beautiful subject', 
    completed: false },
  { id: 2,
    text: 'Eat a burguer', 
    completed: true },
];

function App() {
 const [wishes, setWishes] = useState(initial_wishes);

  function onNewWish(newWish){
    //add the new wish to the wishes array
    setWishes((currentWishes) => [...currentWishes, newWish]);
  }

  return (
      <div className = "app">

        <h1>My wishList</h1>

        <WishInput onNewWish={onNewWish}/>
        <WishList wishes={wishes} />
        
        <button type="button"> Archive all wishes </button>

      </div>
    );
}

export default App
