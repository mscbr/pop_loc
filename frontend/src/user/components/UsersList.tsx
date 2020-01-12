import React from 'react';

import UserItem from './UserItem';
import './UsersList.css';

interface Props {
    items: {
        id: string;
        username: string;
        image: string;
        events: string[];
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
        <React.Fragment>
            <ul>
                {props.items.map(user => (
                    <UserItem
                        key={user.id}
                        username={user.username}
                        image={user.image}
                        events={user.events}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default UsersList;
