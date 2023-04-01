import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = [
        { label: 'Home', href: '#sectionHome' },
        { label: 'Sobre mim', href: '#sectionAbout' },
        { label: 'Experiência', href: '#sectionExperiencias' },
        { label: 'Formação', href: '#sectionEducacao' },
        { label: 'Projetos', href: '#sectionPortfolio' },
    ];

    return (
        <nav className="primaryMenu stickyMenuBar bg-white">
            <div className="logo">
                <strong>Dev</strong>
            </div>
            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <button className="button-menu-open-close" onClick={handleMenuClick}>
                {menuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
            </button>
        </nav>
    );
};