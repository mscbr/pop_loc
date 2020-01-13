import React from 'react';
import './UserItem.css';

interface Props {
    username: string;
    image: string;
    events: string[];
}

const UserItem: React.FC<Props> = props => {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <img src={props.image} alt="user avatar" />
                </div>
                <div className="user-item__info">
                    <h2>{props.username}</h2>
                </div>
            </div>
        </li>
    );
};

export default UserItem;
