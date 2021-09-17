import logo from './logo.svg';
import './App.css';
import ViewUsers from './components/ViewUsers'
import PostUser from './components/PostUser';
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser';
function App() {
  return (
    <div className="App">
        <ViewUsers/>
        <PostUser />
        <UpdateUser />
        <DeleteUser/>
    </div>
  );
}

export default App;
