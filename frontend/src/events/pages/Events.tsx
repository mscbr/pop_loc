import React from 'react';

import EventList from '../components/EventList';

const EVENTS = [
    {
        id: '1',
        title: 'Hop the ball!',
        description: 'Quick match in the evening on the local court',
        activity: 'Basketball',
        image:
            'https://i5.walmartimages.ca/images/Large/436/949/6000199436949.jpg',
        address: '279 Bedford Ave, Brooklyn, NY 11211, USA',
        location: {
            lat: 40.7142484,
            lng: -73.9614103
        },
        date: {
            from: new Date(2019, 11, 24, 18, 12, 30, 0)
        },
        price: 0,
        requests: [
            {
                user: '1',
                pending: true,
                accepted: false
            },
            {
                user: '2',
                pending: false,
                accepted: true
            }
        ],
        capacity: 3,
        tags: ['basket', 'ball'],
        createdBy: {
            id: '5',
            username: 'Johnnny'
        },
        createdAt: new Date(2019, 11, 23, 7, 33, 30, 0)
    },
    {
        id: '2',
        title: 'Soccer morning',
        description: 'East side vs. west side',
        activity: 'Football',
        image:
            'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190726183616-soccer-ball-stock.jpg',
        address: '1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA',
        location: {
            lat: 37.4267861,
            lng: -122.0806032
        },
        date: {
            from: new Date(2019, 9, 24, 10, 33, 30, 0)
        },
        price: 0,
        requests: [
            {
                user: '1',
                pending: true,
                accepted: false
            },
            {
                user: '2',
                pending: false,
                accepted: true
            }
        ],
        capacity: 3,
        tags: ['basket', 'ball'],
        createdBy: {
            id: '5',
            username: 'Johnnny'
        },
        createdAt: new Date(2019, 8, 23, 10, 33, 30, 0)
    },
    {
        id: '3',
        title: 'Ping pong',
        description: 'Play with the champion!',
        activity: 'Table-tennis',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61HOHuBkfgL._SX466_.jpg',
        address: 'Děkanka, 140 00 Prague 4, Czechia',
        location: {
            lat: 50.05796,
            lng: 14.45295
        },
        date: {
            from: new Date(2019, 10, 24, 10, 33, 30, 0)
        },
        price: 0,
        requests: [
            {
                user: '11',
                pending: false,
                accepted: true
            }
        ],
        capacity: 1,
        tags: ['tennis', 'table'],
        createdBy: {
            id: '6',
            username: 'Magg'
        },
        createdAt: new Date(2019, 10, 23, 10, 33, 30, 0)
    }
];

const Events: React.FC = () => {
    return <EventList items={EVENTS} />;
};

export default Events;
