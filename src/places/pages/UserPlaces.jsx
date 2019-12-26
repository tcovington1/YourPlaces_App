import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world',
    imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjd1PqyttPmAhXSHc0KHexMDnUQjRx6BAgBEAQ&url=https%3A%2F%2Funtappedcities.com%2F2015%2F02%2F04%2F10-fun-facts-about-the-empire-state-building%2F&psig=AOvVaw2OgXJr3lrMcAhHdBUlKyIf&ust=1577396540350889',
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1',
    location: {
      lat: 40.7484955,
      lng: -73.9882267
    }
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world',
    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D153817204635459&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fempirestatebuilding%2F&docid=DXCBxDn8ZsnSgM&tbnid=Tvn8rc390eavTM%3A&vet=10ahUKEwiogOGU4tHmAhWUKM0KHapOB_8QMwh6KAEwAQ..i&w=960&h=960&bih=766&biw=644&q=empire%20state%20building&ved=0ahUKEwiogOGU4tHmAhWUKM0KHapOB_8QMwh6KAEwAQ&iact=mrc&uact=8',
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u2',
    location: {
      lat: 40.7484955,
      lng: -73.9882267
    }
  }
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;


//fetch and render places for the user


