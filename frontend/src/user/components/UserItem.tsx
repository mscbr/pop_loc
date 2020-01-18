import React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
    id: string;
    username: string;
    image: string;
    events: {
        id: string;
        title: string;
        image: string;
    }[];
}

const UserItem: React.FC<Props> = props => {
    return (
        <li>
            <div className="user__card" style={{ display: 'flex' }}>
                <img
                    src={props.image}
                    alt="User avatar"
                    style={{ height: 100, width: 100, borderRadius: '50%' }}
                />
                <div className="user__card-content">
                    <h5>{props.username}</h5>
                    <Link to={`/${props.id}/events`}>
                        {`Events (${props.events.length})`}
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default UserItem;
