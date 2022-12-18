import React from 'react';




const Header = () => {
    return (
        <header className="header">
            <h3>Онлайн-Кинотеатр</h3>
            <div>
                <a className="links" href="#about">О нас</a>
                <a className="links" href="#contacts">Контакты</a>
                <a className="links" to="#faq">Lorem</a>
            </div>
        </header>

    );
};

export default Header;