import React from 'react'
import './Header.styles.scss'
const Header = () => {
    return (
        <div className='Header'>
            <div className='logo_container'>
                <span className='page_title'>Benifit <span className='big_font'>Wise</span></span>
            </div>
            <div className='link_container'>
                <span className='page_link'>Solutions<i class="arrow down space"></i></span>
                <span className='page_link'>Pricing</span>
                <span className='page_link'>About us</span>
                <span className='page_link'>Login</span>
                <span className='page_link'>Signup</span>
            </div>
        </div>
    )
}

export default Header