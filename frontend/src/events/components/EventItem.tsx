import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { primary, secondary, accentFont, accent } from '../../shared/Styles';

import Card from '../../shared/ui-elements/Card';
import Button from '../../shared/ui-elements/Button';

import { display24time } from '../../helpers/date';

export interface Props {
    id: string;
    title: string;
    description: string;
    activity: string;
    image: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    date: {
        from: Date;
        to?: Date;
    };
    price?: number;
    requests?: {
        user: string;
        pending: boolean;
        accepted: boolean;
    }[];
    capacity: number;
    tags?: string[];
    createdBy: {
        id: string;
        username: string;
    };
    createdAt: Date;
}

const Hour = styled.div`
    color: ${accentFont};
    font-size: 1.8em;
    padding: 10px;
    margin-right: 5px;
    span {
        display: block;
        margin-top: 50%;
    }
`;
const Title = styled.div`
    flex-grow: 1;
    span {
        color: ${accentFont};
    }
    padding-left: 20px;
    border-left: 1px solid ${accent};
    border-right: 1px solid ${accent};
`;
// probably should abstract button element
const Request = styled.div`
    margin-left: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
        color: ${accentFont};
    }
`;
const ListItem = styled.li`
    margin: 2px;
`;

const EventItem: React.FC<Props> = props => {
    const {
        id,
        title,
        description,
        activity,
        image,
        address,
        location,
        date,
        price,
        requests,
        capacity,
        tags,
        createdBy,
        createdAt
    } = props;

    return (
        <ListItem>
            <Card horizontal>
                <Hour>
                    <span>{display24time(date.from)}</span>
                </Hour>
                <Title>
                    <Link
                        to={{
                            pathname: '/modal/1',
                            state: { modal: true }
                        }}
                    >
                        <h3>{title}</h3>
                    </Link>
                    <span>{activity}</span>
                    <Link to={`/`}>
                        <p>{createdBy.username}</p>
                    </Link>
                </Title>
                <Request>
                    <span>Spots:</span>
                    <span>
                        {requests?.filter(request => request.accepted).length} /{' '}
                        {capacity}
                    </span>
                    <Button text="Join" />
                </Request>
            </Card>
        </ListItem>
    );
};
export default EventItem;
