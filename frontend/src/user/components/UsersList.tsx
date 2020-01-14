import React from 'react';
import { List } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            display: 'flex',
            flexDirection: 'column',
            width: 400,
            margin: '0 auto'
        }
    })
);

const UsersList: React.FC<Props> = props => {
    const classes = useStyles();

    if (!props.items.length) {
        return (
            <div className="center">
                <h2> No users found.</h2>
            </div>
        );
    }

    return (
        <React.Fragment>
            <List className={classes.list}>
                {props.items.map(user => (
                    <UserItem
                        key={user.id}
                        username={user.username}
                        image={user.image}
                        events={user.events}
                    />
                ))}
            </List>
        </React.Fragment>
    );
};

export default UsersList;
