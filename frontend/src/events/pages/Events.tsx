import React from 'react';

import EventList from '../components/EventList';

const EVENTS = [
    {
        title: 'Basketball game',
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
            from: new Date(2019, 11, 24, 10, 33, 30, 0)
        },
        price: 0,
        requests: {
            type: [
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
            ]
        },
        capacity: 3,
        tags: ['basket', 'ball'],
        createdBy: {
            id: '5',
            username: 'Johnnny'
        },
        createdAt: new Date(2019, 11, 23, 10, 33, 30, 0)
    },
    {
        title: 'Basketball game',
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
            from: new Date(2019, 11, 24, 10, 33, 30, 0)
        },
        price: 0,
        requests: {
            type: [
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
            ]
        },
        capacity: 3,
        tags: ['basket', 'ball'],
        createdBy: {
            id: '5',
            username: 'Johnnny'
        },
        createdAt: new Date(2019, 11, 23, 10, 33, 30, 0)
    },
    {
        title: 'Ping-pong',
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
        requests: {
            type: [
                {
                    user: '11',
                    pending: false,
                    accepted: true
                }
            ]
        },
        capacity: 1,
        tags: ['tennis', 'table'],
        createdBy: {
            id: '6',
            username: 'Magg'
        },
        createdAt: new Date(2019, 10, 23, 10, 33, 30, 0)
    }
];
