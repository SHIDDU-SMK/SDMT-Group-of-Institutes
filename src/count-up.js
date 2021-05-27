import React, { Component } from 'react';
import CountUp from 'react-countup';
import {  BsPeopleFill, BsFillCalendarFill, BsFillPersonLinesFill } from 'react-icons/bs';
import { FaPlaceOfWorship } from 'react-icons/fa';

    class ScrollCountUp extends Component {

    render() {
             return (
        <>
            <section id="counts" class="counts">
            <div class="container" data-aos="fade-up">

                <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div class="count-box">
                    <i><BsPeopleFill /></i>
                        <CountUp start={0} end={1550} suffix="+" />
                    <p>Students</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div class="count-box">
                    <i><BsFillCalendarFill /> </i>
                        <CountUp start={0} end={16} />
                    <p>Years of Experience</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                    <i><FaPlaceOfWorship /> </i>
                        <CountUp start={0} end={20} suffix="+" />
                    <p>Acre campus</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div class="count-box">
                    <i><BsFillPersonLinesFill /> </i>
                        <CountUp start={0} end={320} suffix="+" />
                    <p>Staff</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
        );
    }
}
export default ScrollCountUp;
