import React from 'react'

import './header.styles.scss'
import img from '../../assets/images/hacker-news@3x.png'

function Header() {
    return (
        <div className="header">
            <img className='header-img' src={img} alt="HACKER NEWS" />
        </div>
    )
}

export default Header
