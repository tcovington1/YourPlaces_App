import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';
import Avatar from '../../shared/components/components/UIElements/Avatar';
import Card from '../../shared/components/components/UIElements/Card';

const UsersItem = (props) => {
  const {id, name, image, placeCount} = props
  return(
    <>
    <li className='user-item center'>
        <Card  className="user-item__content" >
          <Link to={`/${id}/places`}>        
            <div className="user-item__item">
              <Avatar image={image} />
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h2>
                {placeCount} { props.placeCount === 1 ? 'Place' : 'Places'}
              </h2>
            </div>
          </Link>
        </Card>
    </li>
    </>
  )
};


export default UsersItem;