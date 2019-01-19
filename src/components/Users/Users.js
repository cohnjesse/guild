import React from 'react'
import './Users.css'

const Users = (props) => {
    return (
        <div className="users">
          <p className="user-headline">Users</p>
          <ul className="user-list">
            {props.userList.map((user) => {
              if(user.name !== props.currentUser) {
                return (
                  <li key={user.id} className="user">{user.name}</li>
                )
              }
            })}
          </ul>
        </div>
    )
}

export default Users;