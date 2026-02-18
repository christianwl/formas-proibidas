import { Link } from 'react-router-dom';

import completeLogo from '@/assets/img/logo/complete-logo.svg';

import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={completeLogo}/>
            </Link>
        </header>
    );
}