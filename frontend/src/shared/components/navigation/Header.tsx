import React from 'react';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Header: React.FC<Props> = props => {
    return <header data-testid="header">{props.children}</header>;
};
export default Header;
