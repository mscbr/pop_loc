import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: '1',
            username: 'mscbr',
            image: 'https://d.newsweek.com/en/full/615399/grey-seals.jpg',
            events: ['1', '2', '3']
        },
        {
            id: '2',
            username: 'msaacbr',
            image: 'https://d.newsweek.com/en/full/615399/grey-seals.jpg',
            events: ['1', '2', '3']
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;
