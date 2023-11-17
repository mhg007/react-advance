import './App.css';
import { AppContext } from './context';
import { AddUser } from './components/AddUser';
import { useState } from 'react';
import { UserList } from './components/UserList';
import {DatePicker, Form} from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
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
      {/* <AppContext.Provider value={{users,dispatchUserEvent}}>
        <AddUser/>
        <UserList/>
      </AppContext.Provider> */}
      <Form initialValues={{start: dayjs().startOf('month'), end:moment().endOf('month')}}>
        <Form.Item name='start' label='Start Date'>
          <DatePicker format={"YYYY-MM-DD"} placeholder='Start Date'/>
        </Form.Item>
        <Form.Item name='end' label='End Date'>
          <DatePicker format={"YYYY-MM-DD"} placeholder='End Date'/>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
