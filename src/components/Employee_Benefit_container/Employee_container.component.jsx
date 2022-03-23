import React from 'react'
import EmployeeCard from '../Emloyee_Card/EmployeeCard.component';
import './Employee.styles.scss'

const EmployeeContainer = () => {
    return (
        <div className='hexagon_container'>
            <div className="benefit_container">
                <span className='need'>NEED</span>
                <span className="employeeimportance">Why Employee Benefit is important?</span>
                <div className='card_info'>
                    <EmployeeCard title={"Employee Engagement"} number={"5x"} logo1={require('../../Assets/Arrow_Up_Big.png')} logo2={require('../../Assets/Arrow_up_small.png')} />
                    <EmployeeCard title={"Increased Participation"} number={"40%"} />
                    <EmployeeCard title={"Reduced Absentieesm"} number={"7%"} logo1={require('../../Assets/Arrow_Down_big.png')} logo2={require('../../Assets/Arrow_down_small.png')} />
                    <EmployeeCard title={"Increased peer-to-peer recognition"} number={"20%"} />
                    <EmployeeCard title={"Boost in work culture"} number={"10%"} logo1={require('../../Assets/Arrow_Up_Big.png')} logo2={require('../../Assets/Arrow_up_small.png')} />
                    <EmployeeCard title={"Increase in employee loyalty"} number={"15%"} />
                </div>
            </div>
        </div>
    )
}

export default EmployeeContainer;
