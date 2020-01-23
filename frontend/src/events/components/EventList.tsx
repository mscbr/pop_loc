import React from 'react';

import styled from 'styled-components';

import EventItem, { Props as EventItemProps } from './EventItem';

interface Props {
    items: Array<EventItemProps>;
}

const StyledList = styled.ul`
    width: 600px;
    margin: 50px auto;
    @media (max-width: 650px) {
        width: 450px;
    }
    @media (max-width: 540px) {
        width: 350px;
    }
`;

const EventList: React.FC<Props> = props => {
    if (!props.items.length) {
        return (
            <div className="center">
                <h2> No users found.</h2>
            </div>
        );
    }
    return (
        <StyledList>
            {props.items.map(event => (
                <React.Fragment key={`event-item-${event.id}`}>
                    <EventItem
                        id={event.id}
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
                </React.Fragment>
            ))}
        </StyledList>
    );
};

export default EventList;
