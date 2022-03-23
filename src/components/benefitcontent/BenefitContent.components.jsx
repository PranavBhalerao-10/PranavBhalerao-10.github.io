import React from 'react'
import BenefitContainer from '../BenefitContainer/BenefitContainer.component'
import logo4 from '../../Assets/lf20_9glXY4.json].png'
import logo1 from '../../Assets/lf20_BCXrjU.json].png'
import logo2 from '../../Assets/lf20_wrrmnklf.json].png'
import logo3 from '../../Assets/lf20_z1gdzyu2.json].png'
const BenefitContent = () => {
    return (
        <div className='Benefit_container'>
            <div className="benefit_container">
                <span className='need'>Benefits</span>
                <span className="employeeimportance">Why Benifits wise ?</span>
            </div>
            <div className="BenefitContent">
                <BenefitContainer direction={"left"} title={"Rewards and recognition"} content={"Employee recognition programme That drives the business growth an experience that is fun timely and reinforces the right employement empowerment"} imageUrl={logo1} />
                <BenefitContainer direction={"right"} title={"Tax Free Benifits"} content={"Tax saving Benefits upto Rs.75,000 with a co-pay option available for higher value transaction"} imageUrl={logo2} />
                <BenefitContainer direction={'left'} title={"Advantage card"} content={"Meal,feul, communication,gifts and other digital tax benefits using out Razor card for hassle free tax benefits which can be used in 100+ outlets in India"} imageUrl={logo3} />
                <BenefitContainer direction={'right'} title={"Perks"} content={"Exclusive corporate deals,coupons,discounts and cashback on 400+ brands all over India. Prioritize the well being of employees by enabling savings with perks in every sphere of life."} imageUrl={logo4} />
            </div>
        </div>
    )
}

export default BenefitContent