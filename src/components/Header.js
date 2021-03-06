import React from "react";

function Header() {
    return (
        <nav className='blue lighten-2'>
            <div className='nav-wrapper blue lighten-2'>
                <a href='#' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/wrongsky1/shop-project' target='_blank' rel='noreferrer'>repo</a>
                    </li>
                 
                </ul>
            </div>
        </nav>
    );
}

export { Header };
