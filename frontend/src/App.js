import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import chatpage from './Pages/chatpage';

function App() {
  return (
    <div className="App">
      <Route path = '/' component = {Homepage} exact/>
      <Route path = '/chats' component={chatpage}/>
    </div>
  );
}

export default App;
