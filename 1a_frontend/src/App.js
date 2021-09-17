import logo from './logo.svg';
import './App.css';
import ViewUsers from './components/ViewUsers'
import PostUser from './components/PostUser';

function App() {
  return (
    <div className="App">
        <ViewUsers/>
        <PostUser />
    </div>
  );
}

export default App;
