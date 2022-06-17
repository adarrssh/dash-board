import React from 'react'
import "./Widget.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"


function Widget() {
    return (
        <div className="featured">
            <div className="featuredItem">
               <h4>Sales</h4>
               <div className="sales-body">
                <p><span className='featuredMoney'>$3,232</span> <span>-232 <ArrowDownward className="featuredIcon negative" /></span></p>
                <p>Compared to last month</p>
               </div>
            </div>

            <div className="featuredItem">
               <h4>Sales</h4>
               <div className="sales-body">
                <p><span  className='featuredMoney'>$3,232</span> <span>+232 <ArrowUpward className="featuredIcon" /></span></p>
                <p>Compared to last month</p>
               </div>
            </div>

            <div className="featuredItem">
               <h4>Sales</h4>
               <div className="sales-body">
                <p><span  className='featuredMoney'>$3,232</span> <span>-232 <ArrowDownward className="featuredIcon negative" /></span></p>
                <p>Compared to last month</p>
               </div>
            </div>


        </div>
    )
}

export default Widget

