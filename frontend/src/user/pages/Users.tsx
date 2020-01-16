import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: '1',
            username: 'mscbr',
            image: 'https://d.newsweek.com/en/full/615399/grey-seals.jpg',
            events: [
                {
                    id: '1',
                    title: 'event1'
                },
                {
                    id: '2',
                    title: 'event2asdada'
                }
            ]
        },
        {
            id: '2',
            username: 'msaacbr',
            image: 'https://d.newsweek.com/en/full/615399/grey-seals.jpg',
            events: [
                {
                    id: '4',
                    title: 'event4'
                },
                {
                    id: '3',
                    title: 'event3'
                }
            ]
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;
