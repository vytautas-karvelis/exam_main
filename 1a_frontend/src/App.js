import logo from './logo.svg';
import './App.css';
import ViewUsers from './components/ViewUsers'
import PostUser from './components/PostUser';
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser';
function App() {
  return (
    <div className="App">
      <h1>Vartotojų Tvarkyklė</h1>
      <hr></hr>
        <div className="appContainer">
          <ViewUsers/>
          <PostUser />
          <UpdateUser />
          <DeleteUser/>        
        </div>
     
    </div>
  );
}

export default App;
