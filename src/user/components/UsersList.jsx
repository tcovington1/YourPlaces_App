import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/components/UIElements/Card';

import './UserList.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <>
        <Card>
          <h1>No users found.</h1>
        </Card>
      </>
    );
  }

  return (
    <ul>
      {props.items.map( user => {
        const { id, image, name, places } = user
        return(
          <UserItem 
            key={id} 
            id={id} 
            image={image} 
            name={name} 
            placeCount={places} 
            />
        )
      })}
    </ul>
  )
};


export default UsersList;