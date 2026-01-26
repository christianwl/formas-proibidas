import { Link } from 'react-router-dom';

import './Header.css'

import logoCompleta from '../assets/img/LogoCompleta.svg';

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logoCompleta}/>
            </Link>
        </header>
    );
}