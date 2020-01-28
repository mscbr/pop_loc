import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Modal from '../../shared/ui-elements/Modal';

interface Props extends RouteComponentProps<{ id: string }> {}

const EventDetails: React.FC<Props> = props => {
    const id = props.match.params.id;
    const isModal = props.location.state && props.location.state.modal;
    return isModal ? (
        <Modal>
            <h2>EventDetails: {id}</h2>
        </Modal>
    ) : (
        <h2>EventDetails: {id}</h2>
    );
};

export default EventDetails;
