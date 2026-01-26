import { Link } from 'react-router-dom';

import logoCompleta from '@/assets/img/LogoCompleta.svg';

import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logoCompleta}/>
            </Link>
        </header>
    );
}