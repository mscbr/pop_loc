import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <header data-testid="header">
                <nav>
                    <div className="logo">
                        <img src="/static/match-logo.png" alt="" />
                    </div>
                    <div className="settings">
                        <ul>
                            <li>+</li>
                            <li>Explore</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};
export default Header;
