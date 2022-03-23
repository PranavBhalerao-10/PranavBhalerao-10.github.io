import React from 'react'
import './Testimonial.styles.scss'

const Testimonials = () => {
    return (
        <div className='testimonial_container'>
            <div className="benefit_container">
                <span className='need'>Testimonial</span>
                <span className="employeeimportance">Words from Our Customers</span>
            </div>
            <br />
            <div className='testimonial_comment'>
                <img src={require('../../Assets/Vector 21.png')} alt="" />
                <span className='testimonial_review'>"Great Rewards and have a great customer service"</span>
                <img src={require('../../Assets/Vector 20.png')} alt="" />
            </div>
        </div>
    )
}

export default Testimonials