import React, { useContext } from 'react'
import { AppContext } from '../context'
import { User } from './User';

export const UserList = () => {
    const {users} = useContext(AppContext);
  return (
    <div>
        <h1>Available Users</h1>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>
  )
}
