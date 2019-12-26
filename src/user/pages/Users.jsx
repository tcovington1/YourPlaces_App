import React from 'react';

import UsersList from '../components/UsersList';

// import Pic from '../../assets/dpl-pic.jpeg';

const Users = () => {
  const USERS = [
    {
    id: 'u1',
    name: "Taylor Covington",
    image: 'https://www.pexels.com/photo/selective-focus-photo-of-smiling-man-looking-at-his-phone-while-holding-cup-3206080/',
    places: 3,
  }
];
  return (
    <>
  <h1>Users</h1>
  <UsersList items={USERS} />
  </>
  )};

export default Users;
