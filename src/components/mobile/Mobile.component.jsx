import React from 'react'
import './Mobile.component.scss'

const Mobile = () => {
    return (
        <div className='top_custom_div'>
            <div className='header_info'>
                <div className='header_title'>
                    Provide <span>Unmatched Perks </span>and <span>Retain top talent</span>
                </div>
                <div className="header_content">
                    <div className="header_content_1">
                        Our Employee Benefit programmes can help employee save money on taxes,
                        simply replace meal coupons,foodcards,gasoline cards,
                        vacation vouchers and gift cards with a single card to digitalize
                        your employee tax benefit programme.
                    </div>
                    <div className="header_content_2">
                        Add tax free perks to the card online to help your employee save money on taxes.
                    </div>
                </div>
                <div className="startupIndia">
                    <div className="startupIndia_text">
                        Recognized by
                        <img src={require('../../Assets/image 9.png')} alt='Startup' />
                    </div>
                </div>
            </div>
            <div className="header_logo">
                <img src={require('../../Assets/Blue.png')} alt='Mobile' height={"638px"} width={"280px"} />
            </div>
        </div>
    )
}
export default Mobile;