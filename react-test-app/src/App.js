import MyB from './component/MyButton';
import { Button1, Button3 } from './component/ButtonLib';
import AP from './component/AboutPage';
import Profile from './component/Profile';
import ShoppingList from './component/ShoppingList';
import './App.css';
import CountState from './component/CountState';
import { useState } from 'react';

function CountState2({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Clicked {count} Times
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div className="wrapper">
      <h1>Welcome to my App</h1>
      <div>
        <h1>Hello React!</h1>
        <MyB /><br />
        <p>named export example</p>
        <Button1 />&nbsp;
        <Button3 />
        <p>wrapping example</p>
        <AP />
        <p>Displaying data</p>
        <Profile />
        <p>Rendering Lists</p>
        <ShoppingList />
      </div>
      <div>
        
      <h1>Hello State!</h1>
        <CountState />
        <CountState />
        <CountState /> 
      </div>
      <div>
        <p>Sharing data between components</p>
        <CountState2 count={count} onClick={handleClick} />
        <CountState2 count={count} onClick={handleClick} />
      </div>
    </div>
  )
}
