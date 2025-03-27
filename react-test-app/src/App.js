import MyB from './component/MyButton';
import { Button1, Button3 } from './component/ButtonLib';
import AP from './component/AboutPage';
import Profile from './component/Profile';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <MyB /><br />
      <Button1 />&nbsp;
      <Button3 />
      <AP />
      <Profile />
    </div>
  )
}
