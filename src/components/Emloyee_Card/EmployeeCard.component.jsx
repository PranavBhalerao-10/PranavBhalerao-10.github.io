import React from 'react'
import './EmployeeCard.styles.scss'
const EmployeeCard = ({ number, title, logo1, logo2 }) => {
    return (
        <div className="employee_container">
            <div className='employee_card'>
                <div className="arrow_title">
                    {logo1 &&
                        <>
                            <img src={logo2} alt='' />
                            <img src={logo1} alt='' />
                        </>
                    }
                    <span classname='Number-title'>{number}</span>
                </div>
                <div className="card_title">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard