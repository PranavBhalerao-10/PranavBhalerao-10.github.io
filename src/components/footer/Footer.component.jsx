import React from 'react'
import './Footer.styles.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='logo_container_2'>
                <span className='page_title'>Benifit <span className='big_font'>Wise</span></span>
                <span className='page_desc'>We envision a world where the employees are highly engaged and very happy at there work.Join us in our journey today</span>
                <img src={require('../../Assets/image 9.png')} alt='Startup' width={"210px"} />
            </div>
            <div className="Links">
                <span className='link_title'>About</span>
                <span className='link_links'>About Us</span>
                <span className='link_links'>Contact Us</span>
                <span className='link_links'>Career</span>
            </div>
            <div className="Links">
                <span className='link_title'>Legal</span>
                <span className='link_links'>Terms of use</span>
                <span className='link_links'>Privacy policy</span>
            </div>
            <div className="Links">
                <span className='link_title'>Download the App</span>
                <span className='link_links'>Takes just 30 seconds to download !</span>
                <div className="store_container">
                    <img src={require('../../Assets/Rectangle 23.png')} alt="" width={"200px"} />
                    <img src={require('../../Assets/Rectangle 24.png')} alt="" width={"200px"} />
                </div>
            </div>
        </div>
    )
}

export default Footer;