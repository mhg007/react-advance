import './App.css';
import { AppContext } from './context';
import { AddUser } from './components/AddUser';
import { useState } from 'react';
import { UserList } from './components/UserList';

function App() {
  const [users,setUsers] = useState([]);
  const dispatchUserEvent = (actionType,payload)=>{
    switch(actionType){
      case 'ADD_USER':
        setUsers([...users,payload.newUser]);
        break;
      case 'REMOVE_USER':
        setUsers(users.filter(user => user.id !== payload.userId));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{users,dispatchUserEvent}}>
        <AddUser/>
        <UserList/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
