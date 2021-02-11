import React from 'react';

var NavBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Tic Tac Toe</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="user nav-link" href="#">
                        <span className="name">{props.user.name}</span>

                        <span className="sr-only">(current)</span>
                        <span className="nav-avatar" style={{backgroundImage: `url(${props.user.avatar})`}} alt=""/>
                    </a>
                </li>

            </ul>

            <div className="float-right">
                <a href="/users/sign_out" data-method="delete">Sign Out</a>
            </div>
        </div>
    </nav>
);

export default NavBar;