import React from 'react';

import UserItem from './UserItem';
import './UsersList.css';

interface Props {
    items: {
        id: string;
        username: string;
        image: string;
        events: {
            id: string;
            title: string;
            image: string;
        }[];
    }[];
}

const UsersList: React.FC<Props> = props => {
    if (!props.items.length) {
        return (
            <div className="center">
                <h2> No users found.</h2>
            </div>
        );
    }

    return (
        <>
            <ul>
                {props.items.map(user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        username={user.username}
                        image={user.image}
                        events={user.events}
                    />
                ))}
            </ul>
        </>
    );
};

export default UsersList;
