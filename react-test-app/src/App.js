import MyB from './component/MyButton';
import { Button1, Button3 } from './component/ButtonLib';
import AP from './component/AboutPage';
import Profile from './component/Profile';
import ShoppingList from './component/ShoppingList';
import './App.css';
import CountState from './component/CountState';

export default function App() {
  return (
    <div className="wrapper">
      <div>

      <h1>Hello React!</h1>
        <MyB /><br />
        <Button1 />&nbsp;
        <Button3 />
        <AP />
        <Profile />
        <ShoppingList />
      </div>
      <div>
        
      <h1>Hello State!</h1>
        <CountState />
        <CountState />
        <CountState /> 
      </div>
    </div>
  )
}
