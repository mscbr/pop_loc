import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: '1',
            username: 'seel',
            image: 'https://d.newsweek.com/en/full/615399/grey-seals.jpg',
            events: [
                {
                    id: '1',
                    title: 'event1',
                    image:
                        'https://cdn.vox-cdn.com/thumbor/rMx0_dTCBF5FA3OSAs2yxO5FA48=/0x0:6876x4584/1200x800/filters:focal(2385x0:3485x1100)/cdn.vox-cdn.com/uploads/chorus_image/image/65875093/_DSC0375.0.jpg'
                },
                {
                    id: '2',
                    title: 'event2asdada',
                    image:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl7PariLsGZ7bp9B694rf5Qj8lqks2O4yf9EonVjWzmUaJt_brA&s'
                }
            ]
        },
        {
            id: '2',
            username: 'owly',
            image:
                'https://www.audubon.org/sites/default/files/styles/hero_cover_bird_page/public/web_a1_3751_8_barn-owl_shlomo_neuman_kk-adult-male_copy.jpg?itok=D0tHCXv5',
            events: [
                {
                    id: '4',
                    title: 'event4',
                    image:
                        'https://simplelifedivers.com/wp-content/uploads/scuba-diving-internship-koh-tao.jpg'
                },
                {
                    id: '3',
                    title: 'event3',
                    image:
                        'https://previews.123rf.com/images/chromaco/chromaco1109/chromaco110900021/10537816-basketball-hoop-with-basketball-cartoon.jpg'
                },
                {
                    id: '2',
                    title: 'event2asdada',
                    image:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl7PariLsGZ7bp9B694rf5Qj8lqks2O4yf9EonVjWzmUaJt_brA&s'
                }
            ]
        }
    ];
    return <UsersList items={USERS} />;
};

export default Users;
