import React from 'react'
import './TrustedCompanies.styles.scss'
const TrustedCompanies = () => {
    return (
        <div className='trusted_companies'>
            <div className="benefit_container">
                <span className='need'>Brand Partners</span>
                <span className="employeeimportance">Providing best with 500 brand partners</span>
            </div>
            <img src={require('../../Assets/image 8.png')} alt="" width={"920px"} />
        </div>
    )
}

export default TrustedCompanies;