import logo from './logo.svg';
import './App.css';
import ViewUsers from './components/ViewUsers'
import PostUser from './components/PostUser';
import UpdateUser from './components/UpdateUser'
function App() {
  return (
    <div className="App">
        <ViewUsers/>
        <PostUser />
        <UpdateUser />
    </div>
  );
}

export default App;
