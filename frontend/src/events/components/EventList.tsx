import React from 'react';

import EventItem, { Props as EventItemProps } from './EventItem';

interface Props {
    items: Array<EventItemProps>;
}

const EventList: React.FC<Props> = props => {
    if (!props.items.length) {
        return (
            <div className="center">
                <h2> No users found.</h2>
            </div>
        );
    }
    return (
        <ul>
            {props.items.map(event => (
                <EventItem
                    title={event.title}
                    description={event.description}
                    activity={event.activity}
                    image={event.image}
                    address={event.address}
                    location={event.location}
                    date={event.date}
                    price={event.price}
                    requests={event.requests}
                    capacity={event.capacity}
                    tags={event.tags}
                    createdBy={event.createdBy}
                    createdAt={event.createdAt}
                />
            ))}
        </ul>
    );
};

export default EventList;
