import React from 'react'
import './BenefitContainer.styles.scss'
const BenefitContainer = ({ direction, title, content, imageUrl }) => {

    return (
        <div className='benefit_container' style={{ float: `${direction}` }}>
            <img src={imageUrl} alt="" width={"150px"} />
            <div className="benefit_content">
                <span className='benefit_title'>{title}</span>
                <span className='benefit__content'>{content}</span>
            </div>
        </div>
    )
}

export default BenefitContainer